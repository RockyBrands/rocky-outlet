var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ls724310@gmail.com',
           pass: '-Te168450133720'
    }
});

const mailOptions = {
    from: 'ls724310@gmail.com', // sender address
    to: 'levi.stroop@rockybrands.com', // list of receivers
    subject: 'Hello', // Subject line
    html: '<p>Hello? Is this real life?</p>'// plain text body
};

function sendMail() {
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
        console.log(err)
        else
        console.log(info);
    })
};