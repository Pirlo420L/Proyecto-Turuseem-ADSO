/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useRef } from "react";
import clieteAxios from "../config/axios";

const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [ cargando, setCargando ] = useState(true)
    const [ auth, setAuth ] = useState({})
    // const effectRan = useRef(false)

    useEffect(() => {
        // if (effectRan.current) return
        // effectRan.current = true
        const autenticarUser = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const url = `/api/user/perfil`
                const { data } = await clieteAxios(url, config)
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({}) 
            }
            setCargando(false)
        }
        autenticarUser()
    }, [])

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})
    }
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext