const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

let otpStore = {}; // temporary storage

// Send OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[email] = otp;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pravinmahale028@gmail.com", // replace
        pass: "hqffblqsddawzwta",   // replace
      },
    });

    await transporter.sendMail({
      from: "pravinmahale028@gmail.com",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`,
    });

    res.status(200).json({
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Failed to send OTP",
    });
  }
});

// Verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    delete otpStore[email];

    return res.status(200).json({
      success: true,
      message: "OTP verified",
    });
  }

  res.status(400).json({
    success: false,
    message: "Invalid OTP",
  });
});

module.exports = router;