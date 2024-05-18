/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";


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
    return (
        <>
            <form id="apprenticeForm" action="" onSubmit={sendForm} className="container border border-success p-4 d-flex flex-column align-items-center">
                <h1 className="mb-3 text-success">Registrar Aprendices</h1>
                <label htmlFor="document" >Documento: </label>  {/*En caso de error canbio el tipo de dato del input documento*/}
                <div className="col-6">
                    <input type="text" id="document" value={Id_Aprendiz} onChange={(e) => setId_Aprendiz(e.target.value)} className="form-control "/>
                </div>
                <div className=" d-flex justify-content-center col-6">
                    <div className="mt-4">
                        <label htmlFor="name">Nombres: </label>
                    </div>
                    <div className="col- mt-3">
                        <input type="text" id="name" value={Nom_Aprendiz} onChange={(e) => setNom_Aprendiz(e.target.value)} className="form-control col-5"/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="lastName">Apellidos: </label>
                    </div>
                    <div className="col- mt-3">
                        <input type="text" id="lastName" value={Ape_Aprendiz} onChange={(e) => setApe_Aprendiz(e.target.value)}className="form-control col-5"/>
                    </div>
                </div>
                <label htmlFor="token">Ficha: </label>
                <div className="col-6">
                    <input type="text" id="token" value={Id_Ficha} onChange={(e) => setId_Ficha(e.target.value)}className="form-control col-5"/>
                </div>
                <label htmlFor="birthDate">Fec Nacimiento: </label>
                <div className="col-6">
                    <input type="date" id="birthDate" value={Fec_Nacimiento} onChange={(e) => setFec_Nacimiento(e.target.value)} className="form-control col-5"/>
                </div>
                <label htmlFor="gender">Genero: </label>
                <div className="col-6">
                    <select name="" id="gender" value={Gen_Aprendiz} onChange={(e) => setGen_Aprendiz(e.target.value)} className="form-select col-5">
                        <option value="">Seleccione el genero</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                        <option value="O">Otro</option>
                    </select>
                </div>
                <label htmlFor="email">Correo: </label>
                <div className="col-6">
                    <input type="text" id="email" value={Cor_Aprendiz} onChange={(e) => setCor_Aprendiz(e.target.value)}className="form-control col-5"/>
                </div>
                <label htmlFor="phone">Telefono: </label>
                <div className="col-6">
                    <input type="text" id="phone" value={Tel_Aprendiz} onChange={(e) => setTel_Aprendiz(e.target.value)} className="form-control col-5"/>
                </div>
                <label htmlFor="sponsorship">Patrocinio: </label>
                <div className="col-6">
                    <select name="" id="sponsorship" value={Patrocinio} onChange={(e) => setPatrocinio(e.target.value)} className="form-select col-5">
                        <option value="">Seleccione...</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <label htmlFor="coexistenceCenter">Centro Convivencia: </label>
                <div className="col-6">
                    <select name="" id="coexistenceCenter" value={CentroConvivencia} onChange={(e) => setCentroConvivencia(e.target.value)} className="form-select col-5">
                        <option value="">Seleccione...</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <input type="submit" id="button" value={buttonForm} className="btn btn-danger col-2"/>
            </form>
        </>
    )
}
export default FormApprentices