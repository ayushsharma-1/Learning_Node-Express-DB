const nodemailer = require('nodemailer');

function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// function formatTime(minutes, seconds) {
//   return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
// }

const otp = generateOtp();

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'ayushsharma1010@outlook.com',
    pass: 'ntqtnrrkuxdetqlv', // Use your App Password here
  },
  debug: true,
});

// HTML template
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #0c1443;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Adjust as needed */
    }

    .moon {
        font-size: 24px;
        color: #ffdd00;
        font-weight: bold;
        text-align: center;
    }

    .otp {
        font-size: 20px;
        color: #ffdd00;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

      
    .bg {
        background: linear-gradient(#bb44f0, #310047);
        background-repeat: repeat-x;
        background-size: cover;
        background-position: left top;
        height: 100%;
        overflow: hidden;
    }
    </style>
</head>
<body >
<div class="bg">
        <div class="moon">🌙 Mooncode</div>
        <p class="otp">Your OTP for signing in: <span>${otp}</span></p>
      </div>
</body>
</html>
`;

// Email content
const mailOptions = {
  from: 'ayushsharma1010@outlook.com',
  to: '2k22.cse.2212991@gmail.com',
  subject: 'OTP for Signing In',
  html: htmlTemplate,
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
