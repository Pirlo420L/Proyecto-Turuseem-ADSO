import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Header = () => {
    const { cerrarSesion } = useAuth()
    return (
        <>
            <header className="py-10 bg-green-500">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <h1 className="font-bold text-green-200 text-2xl text-center">
                        Administrador de Turnos {" "} <span className="text-white font-black ">Sena Empresa</span>
                    </h1>
                    <nav className="flex gap-5 flex-col lg:flex-row mt-5 lg:mt-0 items-center">
                        <Link to="/admin" className="text-white text-base uppercase font-bold">Inicio</Link>
                        <Link to="perfil" className="text-white text-base uppercase font-bold">Perfil</Link>
                        <Link to="aprendices" className="text-white text-base uppercase font-bold">Aprendices</Link>
                        <Link to="memorandos" className="text-white text-base uppercase font-bold">Memorandos</Link>
                        <button type="button" onClick={cerrarSesion} className="text-white text-base uppercase font-bold">Cerrar Sesión</button>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header
