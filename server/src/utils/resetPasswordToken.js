const crypto = require("crypto");
const UserModel = require("../models/userModel");

const resetPasswordToken = async (email) => {
  const cryptoToken = crypto.randomBytes(20).toString("hex");

  const resetUserPasswordToken = crypto
    .createHash("sha256")
    .update(cryptoToken)
    .digest("hex");

  const resetUserPasswordTokenExpiryDate = new Date(
    Date.now() + process.env.RESET_USER_PWD_TOKEN_EXPIRY * 60 * 1000
  );
  const temp = await UserModel.update(
    {
      resetUserPasswordToken,
      resetUserPasswordTokenExpiryDate,
    },
    { where: { userEmail: email }, individualHooks: true }
  );

  //console.log(temp);
  return cryptoToken;
};

module.exports = { resetPasswordToken };
