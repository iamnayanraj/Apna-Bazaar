const UserModel = require("../models/userModel");
const asyncError = require("../middlewares/asyncError");
const { login } = require("../utils/login");
const ErrorHandler = require("../utils/errorHandler");
const { comparePassword, hashPassword } = require("../utils/passwordHashing");
const crypto = require("crypto");
const { resetPasswordToken } = require("../utils/resetPasswordToken");
const { sendResetPasswordMail } = require("../utils/sendResetPasswordMail");
const { Op } = require("sequelize");
// Register a user

const registerUser = asyncError(async (req, res, next) => {
  req.body.userPassword = await hashPassword(req.body.userPassword);

  const user = await UserModel.create(req.body);

  login(user, res, 201);
});

//Login a User

const loginUser = asyncError(async (req, res, next) => {
  const { userEmail, userPassword } = req.body;

  if (!userEmail || !userPassword) {
    return next(new ErrorHandler("Please Enter Email and Password", 401));
  }

  const user = await UserModel.findOne({ where: { userEmail: userEmail } });

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordCorrect = await comparePassword(
    userPassword,
    user.userPassword
  );

  if (!isPasswordCorrect) {
    return next(new ErrorHandler("Invalid Email or password", 401));
  }

  login(user, res, 200);
});

//user Logout

const logoutUser = asyncError((req, res, next) => {
  res.clearCookie("token").status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

// Forget Password

const forgetPassword = asyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = UserModel.findOne({ where: { userEmail: email } });
  if (!user) {
    return next(new ErrorHandler("User not found", 400));
  }

  const resetToken = await resetPasswordToken(email);

  // Send reset password mail

  try {
    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/user/resetpassword/${resetToken}`;

    const message = `Click below to reset your login password \n\n ${resetPasswordUrl} \n\n Please Ignore if not requested`;

    await sendResetPasswordMail(email, "Change Password", message);

    res.status(200).json({
      success: true,
      message: `Reset password link has been sent to ${email}`,
    });
  } catch (error) {
    await UserModel.update(
      { resetUserPasswordToken: null, resetUserPasswordTokenExpiryDate: null },
      { where: { userEmail: email } }
    );
    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset password

const resetPassword = asyncError(async (req, res, next) => {
  const { password, confirmpassword } = req.body;

  if (!password || !confirmpassword) {
    return next(
      new ErrorHandler("Please fill password and confirmpassword", 400)
    );
  }

  if (password != confirmpassword) {
    return next(
      new ErrorHandler("password and confirmpassword doesnot match", 400)
    );
  }

  const resetUserPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await UserModel.update(
    {
      userPassword: await hashPassword(password),
      resetUserPasswordToken: null,
      resetUserPasswordTokenExpiryDate: null,
    },
    {
      where: {
        resetUserPasswordToken,
        resetUserPasswordTokenExpiryDate: { [Op.gt]: new Date(Date.now()) },
      },
      returning: true,
    }
  );
  if (user[0] == 0) {
    return next(
      new ErrorHandler("Either reset token is wrong or token got expired", 404)
    );
  }

  login(user[1], res, 200);
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
};
