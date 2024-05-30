import { useState } from "react";
import Swal from "sweetalert2";

const LoginForm = () => {
    const [Cor_User, setCor_User] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Cor_User, password}),
        })
        const data = await response.json()
        console.log(data);
        Swal.fire({
            title: "Login Exitoso",
            text: "Bienvenido a TURUSEEM",
            icon: "success"
        });
    }
    return (
        <>
            <div onSubmit={handleSubmit} className="container d-flex justify-content-center flex-column col-4 border-2 border p-4 mt-5">
                <h1 className="text-center">Iniciar Sesion</h1>
                <form  className="d-flex flex-column">
                    <label>Correo: </label>
                    <input type="text"className='form-control' value={Cor_User} onChange={(e) => setCor_User(e.target.value)}/>
                    <br/>
                    <label>Contraseña</label>
                    <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <button type="submit" className="btn btn-success col-5">Iniciar Sesion</button>
                </form>
            </div>
        </>
    )
}
export default LoginForm