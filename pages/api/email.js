// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMeEmail = (name, email, message) => {
  //   console.log("Email Sent - nodemailer.js");
  transport
    .sendMail({
      from: process.env.EMAIL,
      to: "satwikanmol25@gmail.com",
      subject: "You Received a message master",
      html: `
        <div>
            <h2>Hey Master,</h2>
            <h3>This is Rengoku</h3>
            <h4>you received following message on your portfolio 🙇</h4>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Message: ${message}</li>
            </ul>
        </div>`,
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export default async (req, res) => {
  try {
    const { name, email, message } = req.body;
    //   console.log("req name:", req.body.name);
    //   console.log("req body:", req.body.message);
    //   console.log("req email:", req.body.email);
    await sendMeEmail(name, email, message);
    res.statusCode = 200;
    res.json({ message: `message sent successfully` });
  } catch (e) {
    res.statusCode = 400;
    res.json({ error: e });
  }
};
