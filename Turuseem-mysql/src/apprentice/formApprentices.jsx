/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
// import { BsSend } from "react-icons/bs";

const FormApprentices = ({ buttonForm, apprentice, URI, updateTextButton}) => {
    const [ Id_Aprendiz, setId_Aprendiz] = useState('')
    const [ Nom_Aprendiz, setNom_Aprendiz] = useState('')
    const [ Ape_Aprendiz, setApe_Aprendiz] = useState('')
    const [ Id_Ficha, setId_Ficha] = useState('')
    const [ Fec_Nacimiento, setFec_Nacimiento] = useState('')
    const [ Gen_Aprendiz, setGen_Aprendiz] = useState('')
    const [ Cor_Aprendiz, setCor_Aprendiz] = useState('')
    const [ Tel_Aprendiz, setTel_Aprendiz] = useState('')
    const [ Patrocinio, setPatrocinio] = useState('')
    const [ CentroConvivencia, setCentroConvivencia] = useState('')


    const sendForm = (e) => {
        e.preventDefault()
        if (buttonForm == 'Actualizar') {
            console.log('Actualizando...');
            axios.put(URI + apprentice.Id_Aprendiz, {
                Id_Aprendiz: Id_Aprendiz,
                Nom_Aprendiz: Nom_Aprendiz,
                Ape_Aprendiz: Ape_Aprendiz,
                Id_Ficha: Id_Ficha,
                Fec_Nacimiento: Fec_Nacimiento,
                Gen_Aprendiz: Gen_Aprendiz,
                Cor_Aprendiz: Cor_Aprendiz,
                Tel_Aprendiz: Tel_Aprendiz,
                Patrocinio: Patrocinio,
                CentroConvivencia: CentroConvivencia
            })
            updateTextButton('Enviar')
            clearForm()
        } else if (buttonForm == 'Enviar') {
            console.log('Enviar...');
            axios.post(URI, {
                Id_Aprendiz: Id_Aprendiz,
                Nom_Aprendiz: Nom_Aprendiz,
                Ape_Aprendiz: Ape_Aprendiz,
                Id_Ficha: Id_Ficha,
                Fec_Nacimiento: Fec_Nacimiento,
                Gen_Aprendiz: Gen_Aprendiz,
                Cor_Aprendiz: Cor_Aprendiz,
                Tel_Aprendiz: Tel_Aprendiz,
                Patrocinio: Patrocinio,
                CentroConvivencia: CentroConvivencia
            })
            clearForm()
        }
    }
    const clearForm = () => {
        setId_Aprendiz('')
        setNom_Aprendiz('')
        setApe_Aprendiz('')
        setId_Ficha('')
        setFec_Nacimiento('')
        setGen_Aprendiz('')
        setCor_Aprendiz('')
        setTel_Aprendiz('')
        setPatrocinio('')
        setCentroConvivencia('')
    }
    const setData = () => {
        setId_Aprendiz(apprentice.Id_Aprendiz)
        setNom_Aprendiz(apprentice.Nom_Aprendiz)
        setApe_Aprendiz(apprentice.Ape_Aprendiz)
        setId_Ficha(apprentice.Id_Ficha)
        setFec_Nacimiento(apprentice.Fec_Nacimiento)
        setGen_Aprendiz(apprentice.Gen_Aprendiz)
        setCor_Aprendiz(apprentice.Cor_Aprendiz)
        setTel_Aprendiz(apprentice.Tel_Aprendiz)
        setPatrocinio(apprentice.Patrocinio)
        setCentroConvivencia(apprentice.CentroConvivencia)
    }
    useEffect(() => {
        setData()
    }, [apprentice])

    // const IconButton = ({ text, icon: Icon }) => {
    //     return (
    //         <button  className="btn btn-outline-success col-2 m-3">
    //             {Icon && <Icon />} {text}
    //         </button>
    //     );
    // };

    return (
        <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 content-center w-full" >
            <form id="apprenticeForm" action="" onSubmit={sendForm} className="bg-white shadow-2xl rounded-2xl px-14 pt-6 pb-8 mb-4 max-w-3xl w-full mt-10" >
                <h1 className="font-bold text-green-600 text-3xl uppercase text-center my-5">
                    Registrar Aprendices
                </h1>

                <div className="mb-3">
                    <label htmlFor="document" className="text-gray-700 uppercase font-bold">Documento</label>
                    <input type="number" id="document" placeholder="Documento del Aprendiz" value={Id_Aprendiz} onChange={(e) => setId_Aprendiz(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="flex space-x-12 mb-3">
                    <div className="w-1/2">
                        <label className="text-gray-700 uppercase font-bold">Nombres</label>
                        <input type="text" id="name"  placeholder="Nombres" value={Nom_Aprendiz} onChange={(e) => setNom_Aprendiz(e.target.value)} className="w-full p-2 border rounded"/>
                    </div>

                    <div className="w-1/2">
                    <label className="text-gray-700 uppercase font-bold">Apellidos</label>
                        <input type="text" id="lastName"  placeholder="Apellidos" value={Ape_Aprendiz} onChange={(e) => setApe_Aprendiz(e.target.value)} className="w-full p-2 border rounded"/>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="text-gray-700 uppercase font-bold">Ficha</label>
                    <input type="text" id="token" placeholder="Numero de Ficha" value={Id_Ficha} onChange={(e) => setId_Ficha(e.target.value)}className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label className="text-gray-700 uppercase font-bold">Fecha de Nacimiento</label>
                    <input type="date" id="birthDate" value={Fec_Nacimiento} onChange={(e) => setFec_Nacimiento(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label className="text-gray-700 uppercase font-bold">Genero</label>
                    <select name="" id="gender" value={Gen_Aprendiz} onChange={(e) => setGen_Aprendiz(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                        <option value="">Seleccione el genero</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                        <option value="O">Otro</option>
                    </select>
                </div>

                <div className="mb-3">
                <label className="text-gray-700 uppercase font-bold">Correo</label>
                    <input type="text" id="email" placeholder="Correo" value={Cor_Aprendiz} onChange={(e) => setCor_Aprendiz(e.target.value)}className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label className="text-gray-700 uppercase font-bold">Telefono</label>
                    <input type="text" id="phone" placeholder="Telefono" value={Tel_Aprendiz} onChange={(e) => setTel_Aprendiz(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label className="text-gray-700 uppercase font-bold">Patrocinio</label>
                    <select name="" id="sponsorship" value={Patrocinio} onChange={(e) => setPatrocinio(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                        <option value="">Seleccione si tiene patrocinio</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="text-gray-700 uppercase font-bold">Centro de Convivencia</label>
                    <select name="" id="coexistenceCenter" value={CentroConvivencia} onChange={(e) => setCentroConvivencia(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                        <option value="">Pertenece al centro de convivencia</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="flex justify-around">
                    <input type="submit" id="button" value={buttonForm}  className="bg-green-600 w-full py-3 px-8 rounded-xl text-white mt-2 uppercase font-bold hover:cursor-pointer hover:bg-green-700 md:w-auto" aria-label="Enviar"/>
                    <input type="submit" id="button" value='Limpiar'  onClick={clearForm} className="bg-yellow-400 w-full py-3 px-8 rounded-xl text-white mt-2 uppercase font-bold hover:cursor-pointer hover:bg-yellow-500 md:w-auto" aria-label="Enviar"/>
                </div>
            </form>
        </div>
        </>
    )
}
export default FormApprentices