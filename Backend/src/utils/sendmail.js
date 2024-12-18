const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "mkarandeep.1208@gmail.com",
    pass: "kwsk arlb yijt vxiw",
  },
});
module.exports = transporter;