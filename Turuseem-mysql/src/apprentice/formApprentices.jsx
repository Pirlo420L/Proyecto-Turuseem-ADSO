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
            <form id="apprenticeForm" action="" onSubmit={sendForm} className="containerPequeño border border-success rounded-3 pt-3 d-flex flex-column align-items-center">
                <h1 className="mb-3 text-success">Registrar Aprendices</h1>
                {/* En caso de error canbio el tipo de dato del input documento */}
                <div className="col-9">
                    <input type="number" id="document" placeholder="Documento" value={Id_Aprendiz} onChange={(e) => setId_Aprendiz(e.target.value)} className="form-control"/>
                </div>
                <div className=" d-flex col-9 justify-content-md-between">
                    <div className=" mt-3 col-5">
                        <input type="text" id="name"  placeholder="Nombres" value={Nom_Aprendiz} onChange={(e) => setNom_Aprendiz(e.target.value)} className="form-control"/>
                    </div>
                    <div className="mt-3 col-6">
                        <input type="text" id="lastName"  placeholder="Apellidos" value={Ape_Aprendiz} onChange={(e) => setApe_Aprendiz(e.target.value)}className="form-control "/>
                    </div>
                </div>
                <div className="col-9 mt-3">
                    <input type="text" id="token" placeholder="Ficha" value={Id_Ficha} onChange={(e) => setId_Ficha(e.target.value)}className="form-control col-5"/>
                </div>
                <div className="input-group flex-nowrap mt-3 d-flex justify-content-evenly">
                    <span className="input-group-text" id="addon-wrapping">Fec Nacimiento</span>
                    <div className="col-5">
                        <input type="date" id="birthDate" value={Fec_Nacimiento} onChange={(e) => setFec_Nacimiento(e.target.value)} className="form-control col-5"/>
                    </div>
                </div>
                <div className="col-9 mt-3">
                    <select name="" id="gender" value={Gen_Aprendiz} onChange={(e) => setGen_Aprendiz(e.target.value)} className="form-select col-5">
                        <option value="">Seleccione el genero</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                        <option value="O">Otro</option>
                    </select>
                </div>
                <div className="col-9 mt-3">
                    <input type="text" id="email" placeholder="Correo" value={Cor_Aprendiz} onChange={(e) => setCor_Aprendiz(e.target.value)}className="form-control col-5"/>
                </div>
                <div className="col-9 mt-3">
                    <input type="text" id="phone" placeholder="Telefono" value={Tel_Aprendiz} onChange={(e) => setTel_Aprendiz(e.target.value)} className="form-control col-5"/>
                </div>
                <div className="col-9 mt-3">
                    <select name="" id="sponsorship" value={Patrocinio} onChange={(e) => setPatrocinio(e.target.value)} className="form-select col-5">
                        <option value="">Seleccione si tiene patrocinio</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="col-9 mt-3">
                    <select name="" id="coexistenceCenter" value={CentroConvivencia} onChange={(e) => setCentroConvivencia(e.target.value)} className="form-select col-5">
                        <option value="">Pertenece al centro de convivencia</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <input type="submit" id="button" value={buttonForm}  className="btn btn-outline-success col-2 m-3" aria-label="Enviar"/>
            </form>
        </>
    )
}
export default FormApprentices