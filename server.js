const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// 👇 Use MailDev (runs locally without credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'exylintrade@gmail.com',
    pass: 'qrfpfnrlqmtgtpdz', // your 16-character Gmail App Password
  },
  tls: {
    rejectUnauthorized: false, // ✅ this skips the self-signed cert issue
  },
});


app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'exylintrade@gmail.com',
    subject: subject || 'New Contact Message',
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('🔥 Email Error:', error.message)
    res.status(500).send({ error: 'Failed to send email' })
  }
})

const PORT = 5000
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`))
