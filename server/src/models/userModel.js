const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = sequelize.define(
  "userModel",
  {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true, // necessary because without it sequelize will find a PK ID in DB
      autoIncrement: true, // necessary becaude without it it will send null to db and db cannot store any explicit value and null not at all.
      field: "UserId",
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
      },
      field: "UserName",
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      validate: {
        isEmail: {
          msg: "Invalid Email",
        },
      },
      field: "UserEmail",
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [8, 15],
      // },
      field: "UserPassword",
    },
    userImage: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "UserImage",
    },
    userRole: {
      type: DataTypes.STRING,
      defaultValue: "user",
      field: "UserRole",
    },
    resetUserPasswordToken: {
      type: DataTypes.TEXT,
      field: "ResetUserPasswordToken",
    },
    resetUserPasswordTokenExpiryDate: {
      type: DataTypes.DATE,
      field: "ResetUserPasswordTokenExpiryDate",
    },
  },
  {
    tableName: "Users",
  }
);

// UserModel.beforeCreate(async (user) => {
//   if (!user.changed(user.userPassword, true)) {
//     next();
//   }
//   user.userPassword = await bcrypt.hash(user.userPassword, 10);
// });

// UserModel.beforeUpdate(async (user) => {
//   console.log("kkk");
//   if (!user.changed(user.userPassword, true)) {
//     console.log("kkk");
//     next();
//   }
//   user.userPassword = await bcrypt.hash(user.userPassword, 10);
// });

module.exports = UserModel;

//

// User

// {
//     "userEmail":"ku@gmail.com",
//     "userPassword":"ku@123456"
// }

// admin

// {
//     "userEmail":"admin@gmail.com",
//     "userPassword":"admin@123"
// }

// with valid mailid

// {
//     "userName":"nayan",
//     "userEmail":"nayanraj.net744@gmail.com",
//     "userPassword":"nayan@1234",
//     "userImage":"nayan image"
// }
