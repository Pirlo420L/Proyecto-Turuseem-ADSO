import { useEffect, useState, useRef} from "react"
import { useParams, Link } from "react-router-dom"
import clieteAxios from "../config/axios.jsx"
import Alerta from "../components/Alerta.jsx"



const CambiarPassword = () => {
    const [ newPassword, setNewPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})
    const [ tokenValido, setTokenValido ] = useState(false)
    const [ passwordModificado, setPasswordModificado ] = useState(false)
    const effectRan = useRef(false)


    const params = useParams()
    const { token } = params
    useEffect(() => {
        if (effectRan.current) return
        effectRan.current = true
        const comprobarToken = async () => {
            try {
                const url = `/api/user/olvide-password`
                await clieteAxios.get(`${url}/${token}`)
                console.log(url, token);
                setTokenValido(true)
                setAlerta({
                    msg: "Coloca tu Nueva Contraseña",
                    error: false
                })
            } catch (error) {
                setAlerta({
                    msg: "Hubo un error con el enlace!",
                    error: true
                })
            }
        }
        comprobarToken()
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (newPassword.length < 6) {
            setAlerta({
                msg: 'La contraseña es muy corta, agrega minimo 6 caracteres.',
                error: true
            })
            return
        }
        try {
            const url = `/api/user/olvide-password`
            const {data } = await clieteAxios.post(`${url}/${token}`, {
                password: newPassword
            })
            setAlerta({
                msg: data.msg,
                error: false
            })
            setPasswordModificado(true)
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
            <h1 className="text-stone-400 font-black text-5xl">Reestablece tu Contraseña y no Pierdas Acceso a {""}<span className="text-green-700">tus Turnos</span></h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-2xl px-7 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta}/> }
        {tokenValido && (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="my-4">
                        <label className="uppercase text-stone-600 font-bold block text-base">Nueva Contraseña: </label>
                        <input type="password" className="border w-full p-2 mt-2 bg-gray-100 rounded-xl" placeholder="Su Nueva Contraseña" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="Guardar Nueva Contraseña" className="bg-green-800 w-full py-3 px-8 rounded-xl text-white mt-2 uppercase font-bold hover:cursor-pointer hover:bg-green-900 md:w-auto"/>
                </form>
            </>
            )}
            {passwordModificado && <Link to="/" className="block text-center my-5 text-gray-500">Iniciar Sesión</Link>}

        </div>
        
        </>
    )
}
export default CambiarPassword