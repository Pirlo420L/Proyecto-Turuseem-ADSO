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
            <form id="apprenticeForm" action="" onSubmit={sendForm}>
                <label htmlFor="document">Documento: </label>  {/*En caso de error canbio el tipo de dato del input documento*/}
                <input type="text" id="document" value={Id_Aprendiz} onChange={(e) => setId_Aprendiz(e.target.value)}/>
                <br />
                <label htmlFor="name">Nombres: </label>
                <input type="text" id="name" value={Nom_Aprendiz} onChange={(e) => setNom_Aprendiz(e.target.value)}/>
                <br />
                <label htmlFor="lastName">Apellidos: </label>
                <input type="text" id="lastName" value={Ape_Aprendiz} onChange={(e) => setApe_Aprendiz(e.target.value)}/>
                <br />
                <label htmlFor="token">Ficha: </label>
                <input type="text" id="token" value={Id_Ficha} onChange={(e) => setId_Ficha(e.target.value)}/>
                <br />
                <label htmlFor="birthDate">Fec Nacimiento: </label>
                <input type="date" id="birthDate" value={Fec_Nacimiento} onChange={(e) => setFec_Nacimiento(e.target.value)}/>
                <br/>
                <label htmlFor="gender">Genero: </label>
                <select name="" id="gender" value={Gen_Aprendiz} onChange={(e) => setGen_Aprendiz(e.target.value)}>
                    <option value="">Seleccione el genero</option>
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                    <option value="O">Otro</option>
                </select>
                <br/>
                <label htmlFor="email">Correo: </label>
                <input type="text" id="email" value={Cor_Aprendiz} onChange={(e) => setCor_Aprendiz(e.target.value)}/>
                <br />
                <label htmlFor="phone">Telefono: </label>
                <input type="text" id="phone" value={Tel_Aprendiz} onChange={(e) => setTel_Aprendiz(e.target.value)}/>
                <br/>
                <label htmlFor="sponsorship">Patrocinio: </label>
                <select name="" id="sponsorship" value={Patrocinio} onChange={(e) => setPatrocinio(e.target.value)}>
                    <option value="">Seleccione...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
                <br/>
                <label htmlFor="coexistenceCenter">Centro Convivencia: </label>
                <select name="" id="coexistenceCenter" value={CentroConvivencia} onChange={(e) => setCentroConvivencia(e.target.value)}>
                    <option value="">Seleccione...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
                <br />
                <input type="submit" id="button" value={buttonForm} className="btn btn-danger"/>
            </form>
        </>
    )
}
export default FormApprentices