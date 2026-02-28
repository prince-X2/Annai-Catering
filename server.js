/* eslint-env node */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber || String(phoneNumber).replace(/\D/g, '').length < 10) {
    return res.status(400).json({ message: 'Valid phone number is required' });
  }

  const requiredEnv = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'CONTACT_RECEIVER_EMAIL'];
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    return res.status(500).json({ message: `Missing env vars: ${missingEnv.join(', ')}` });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: 'New Contact Request - Phone Number',
      text: `A user submitted their phone number: ${phoneNumber}`,
    });

    return res.status(200).json({ message: 'Phone number sent successfully' });
  } catch (error) {
    console.error('Mail send failed:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});

