import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import LoginUser from './LoginUser.jsx'

const UserForm = () => {
    const [Id_User, setId_User] = useState('')
    const [Nom_User, setNom_User] = useState('')
    const [Cor_User, setCor_User] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Id_User, Cor_User, password}),
        })
        const data = await response.json();
        console.log(data);
    };    

    return (
        <>{}
        <div onSubmit={handleSubmit} className="container d-flex justify-content-center flex-column col-4 border-2 border p-4 mt-3">
            <h1 className="text-center">Crear Cuenta</h1>
            <form  className="d-flex flex-column">
                <label>Documento: </label>
                <input type="text" className="form-control" value={Id_User} onChange={(e) => setId_User(e.target.value)}/>
                <br/>
                <label>Nombre:  </label>
                <input type="text" className="form-control" value={Nom_User} onChange={(e) => setNom_User(e.target.value)}/>
                <br/>
                <label>Correo: </label>
                <input type="text"className='form-control' value={Cor_User} onChange={(e) => setCor_User(e.target.value)}/>
                <br/>
                <label>Contraseña: </label>
                <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button type="submit" className="btn btn-success col-4">Registrarse</button>
                <br/>
                <Link to="/login" >Ya tienes una cuenta? Inicia Sesion</Link>
            </form>
        </div>
        <Routes>
            <Route path='/login' element={<LoginUser />} />
        </Routes>
        </>
    )
}
export default UserForm