const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    secure: true,
    auth: {
        user: "ti@email.com.br",
        pass: "***",
    },
});

async function main() {
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <ti@email.com.br>',
        to: "bar@example.com, vinicius.lopes.pimentel@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: ` <html>
                    <body>
                        <h1>Hello, World!</h1>
                        <img src="cid:unique@cid">
                    </body>
                </html>`,
        attachments: [{
            filename: 'welcome.jpeg',
            path: './assets/welcome.jpeg',
            cid: 'unique@cid'
        }],
    });

    console.log("Message sent: %s", info.messageId)
}

main().catch(console.error);