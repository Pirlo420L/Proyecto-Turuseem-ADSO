import nodemailer from "nodemailer";

export const emailOlvidePassword = async(datos) => {
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
        subject: "Reestablece tu Contraseña",
        text: "Reestablece tu Contraseña",
        html: `<p>Hola ${Nom_User}, has solicitado reestablecer tu Contraseña.</p>
                <p>Sigue el sigiente enlace para generar una nueva Contraseña: 
                    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">
                        Reestablecer Contraseña
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