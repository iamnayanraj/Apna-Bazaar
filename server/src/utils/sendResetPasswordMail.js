const nodemailer = require("nodemailer");
const sendResetPasswordMail = (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_SENDER_EMAIL,
    to,
    subject,
    text: message,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendResetPasswordMail };
