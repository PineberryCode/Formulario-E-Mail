const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

/*============================================================================*/
/*============================function=send=data==============================*/
router.post('/emailing', async (request, response) => {
    const { name, email, phone, msg } = request.body;
    contentHTML =   `<h1>Information</h1>
                    <ul>
                        <li>Fullname    :   ${name}     </li>
                        <li>E-mail      :   ${email}    </li>
                        <li>N° celphone :   ${phone}    </li> 
                    </ul>
                    <p>${msg}</p>`;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',                                                       //<-- from: [e-mail] (who user will send the message)
            pass: ''                                                        //<-- pass: [aplication password]
        },
    });

    const info = await transporter.sendMail({
        from: '""<>',                                                       //<-- '"[Encabezado]" <[e-mail]>'
        to: '',                                                             //<-- To whom will the e-mail be sent?: [e-mail] (the user recieves)
        subject: 'Contact Form Test',
        html: contentHTML
    });

    response.redirect('/success.html');
});
/*============================================================================*/

module.exports = router;