const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/user/forgetpassword", forgetPassword);
router.put("/user/resetpassword/:token", resetPassword);
router.get("/user/logout", logoutUser);

module.exports = router;
