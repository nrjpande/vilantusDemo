const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.port || 8181;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  // Configure the nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vilantustest@gmail.com",
      pass: "yyku xerc gnsp qesn",
    },
  });

  // Construct the email message
  const mailOptions = {
    from: "vilantustest@gmail.com",
    to: "vilantushealthcare@gmail.com",
    subject: subject,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send({ message: "Email sent successfully" });
    }
  });
});

//serving the frontend

app.use(express.static(path.join(__dirname, "./vitalhealth/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./vitalhealth/build/index.html")),
    function (err) {
      res.status(500).send(err);
    };
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
