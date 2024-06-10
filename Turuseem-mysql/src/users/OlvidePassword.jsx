import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta.jsx"
import clieteAxios from "../config/axios.jsx"

const OlvidePassword = () => {
    const [Cor_User, setCor_User] = useState('')
    const [alerta, setAlerta] = useState({})


    const handleSubmit = async(e) => {
        e.preventDefault()
        if (Cor_User == " " || Cor_User.length < 7) {
            setAlerta({
                msg: 'El Correo es obligatorio', error: true
            })
            return
        }
        try {
            const url = `/api/user/olvide-password`
            const { data } = await clieteAxios.post(url, { 
                Cor_User: Cor_User
            })
            setAlerta({
                msg: data.msg
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg, 
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
    <>
        <div>
            <h1 className="text-stone-400 font-black text-5xl">Recupera tu Contraseña y Gestiona {""}<span className="text-green-700">tus Turnos</span></h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-2xl px-7 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta}/> }
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="uppercase text-stone-600 font-bold block text-xl">Correo: </label>
                    <input type="email" value={Cor_User} onChange={e => setCor_User(e.target.value)} className="border w-full p-2 mt-2 bg-gray-100 rounded-xl" placeholder="Aquí su Correo" />
                </div>
                <input type="submit" value="Recuperar Contraseña" className="bg-green-800 w-full py-3 px-8 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-green-900 md:w-auto"/>
            </form>
            <nav className="mt-8 lg:flex lg:justify-between">
                <Link to="/" className="block text-center my-5 text-gray-500">¿Tienes una Cuenta? Inicia Sesion</Link>
                <Link to="/registrar" className="block text-center my-5 text-gray-500">¿No tienes una Cuenta? Registrate</Link>
            </nav>
        </div>
    </>
    )
}

export default OlvidePassword
