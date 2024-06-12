import { Outlet, Navigate} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useAuth from "../hooks/useAuth"

const RutaProtegida = () => {
    const { auth, cargando } = useAuth()

    if (cargando) return "Cargando...."
    return (
        <>
            <Header/>
                {auth?.usuario?.Id_User || auth?.Id_User ? (
                    <main className="container mx-auto mt-10">
                        <h1 className="text-stone-400 font-black text-4xl text-center mb-8">Bienvenidos a <span className="text-green-700">TURUSEEM</span></h1>
                        <Outlet/>
                    </main>
                    ) : <Navigate to= '/'/> }
            <Footer/>
        </>
    )
}

export default RutaProtegida
