const nodemailer = require('nodemailer');

function sendEmail(email) {

    const transporter = nodemailer.createTransport({
        // host: "smtp.gmail.email",
        service: "gmail",
        secure: true,
        auth: {
            user: "dianaditya200@gmail.com",
            pass: "ljntjhkrmfcowsdr"
        },
        debug: true,
        logger: true
    });

    const option = {
        from: "dianaditya200@gmail.com",
        to: email,
        subject: "Acount Success Create",
        text: "Thank You!! ",
        html: "<b>Thank You!!</b>"
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(option, (err, info) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            resolve('success')
            console.log("sent: " + info);
        })
    })
}

module.exports = sendEmail