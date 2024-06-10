import { useEffect, useState, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta.jsx"
import clieteAxios from "../config/axios.jsx"



const ConfirmarCuenta =() => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [alerta, setAlerta] = useState({})
    const effectRan = useRef(false)

    const params = useParams()
    const { id } = params
    useEffect(() => {
        if (effectRan.current) return
        effectRan.current = true
        const confirmarCuenta = async() => {
            try {
                const url = `/api/user/confirmar/${id}`
                const { data } = await clieteAxios.get(url)
                setCuentaConfirmada(true)
                setAlerta({
                    msg: data.msg,
                    error: false
                })
            } catch (error) {
                setAlerta({
                    msg: error.response?.data?.msg, 
                    error: true
                });
            }
            setCargando(false)
        } 
        confirmarCuenta()
    }, [])


    return (
    <>
        <div>
            <h1 className="text-stone-400 font-black text-5xl">Confirma tu Cuenta y Comienza a Gestionar {""}<span className="text-green-700">tus Turnos</span></h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-2xl px-7 py-10 rounded-xl bg-white">
            {!cargando && <Alerta alerta={alerta}/>}
                
            {cuentaConfirmada && <Link to="/" className="block text-center my-5 text-gray-500">Iniciar Sesión</Link>}
        </div>
    </>
    )
}

export default ConfirmarCuenta
