// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

const sendMeEmail = (name, email, message) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const html = {
    from: process.env.EMAIL,
    to: "satwikanmol25@gmail.com",
    subject: `You received message from ${from}`,
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
          <h3>To respond simply reply to this email</h3>
      </div>`,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(html, (error, info) => {
      if (error) {
        console.log(error);
        return reject(error);
      } else return resolve(info);
    });
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
    res.json({ error: JSON.stringify(e) });
  }
};
