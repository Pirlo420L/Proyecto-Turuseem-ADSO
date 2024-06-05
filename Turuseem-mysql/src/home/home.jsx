// import { Route, Routes, Link } from "react-router-dom"
// import LoginUser from "../users/LoginUser.jsx"
// import CreateAccount from "../users/CreateAccount.jsx"

const Home = () => {
    return (
        <>
        <h1 className="bg-blue-500 text-center text-4xl font-bold">Bienvenidos a <span className="text-success">TURUSEEM</span></h1>
        {/* <nav className="navbar navbar-expand-lg  navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/login" className="nav-link">Iniciar Sesion</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link" tabIndex="-1">Registrarse</Link>
                        </li>
                    </ul>
            <button className="btn btn-outline-success" type="submit">Cerrar Sesion</button>
                </div>
            </div>  
        </nav>
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/' element={<CreateAccount/>} /> */}
            {/* <Route path='/login' element={<LoginUser/>} /> */}
        {/* </Routes> */}
        
         {/* */}
        </>
    )
}

export default Home