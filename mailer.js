var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '33jsmailer@gmail.com',
    pass: 'newmailer13'
  }
});

var mailOptions = {
  from: '33jsmailer@gmail.com',
  to: 'sergeykravtsov13@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello from Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});