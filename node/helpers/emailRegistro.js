import nodemailer from "nodemailer";

export const emailRegistro = async(datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { Cor_User, Nom_User, token} = datos
    // Enviar Email

    const mailOptions ={
        from: "SENA EMPRESA - LA GRANJA",
        to: Cor_User,
        subject: "Comprueba tu cuenta en TURUSEEM",
        text: "Confirma tu cuenta en TURUSEEM",
        html: `<p>Hola ${Nom_User}, comprueba tu tuenta en TURUSEEM</p>
                <p>Tu cuenta ya esta lista pero debes comprobarla en el siguiente enlace: 
                    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">
                        Comprobar Cuenta
                    </a>
                </p>
                <p>Si tu no creaste esta cuenta, ignora este mensaje</p>
        `
    }
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    console.log("Mensaje enviado: %s", info.messageId)
    })

}