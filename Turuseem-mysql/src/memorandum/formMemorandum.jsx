/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

const FormMemorandum = ({ buttonForm, memorandum, URI, updateTextButton}) => {
    const [Id_Memorando, setId_Memorando] = useState('')
    const [Fec_Memorando, setFec_Memorando] = useState('')
    const [Mot_Memorando, setMot_Memorando] = useState('')
    const [Id_Inasistencia, setId_Inasistencia] = useState('')


    const sendForm = (e) => {
        e.preventDefault()
        if (buttonForm == "Actualizar") {
            axios.put(URI + memorandum.Id_Memorando, {
                Id_Memorando: Id_Memorando,
                Fec_Memorando: Fec_Memorando, 
                Mot_Memorando: Mot_Memorando,
                Id_Inasistencia: Id_Inasistencia
            })
            updateTextButton('Enviar')
            clearForm()
        } else if (buttonForm == "Enviar") {
            axios.post(URI, {
                Id_Memorando: Id_Memorando,
                Fec_Memorando: Fec_Memorando, 
                Mot_Memorando: Mot_Memorando,
                Id_Inasistencia: Id_Inasistencia
            })
            clearForm()
        }
    }

    const clearForm = () => {
        setId_Memorando('')
        setFec_Memorando('')
        setMot_Memorando('')
        setId_Inasistencia('')
    }

    const setData = () => {
        setId_Memorando(memorandum.Id_Memorando)
        setFec_Memorando(memorandum.Fec_Memorando)
        setMot_Memorando(memorandum.Mot_Memorando)
        setId_Inasistencia(memorandum.Id_Inasistencia)
    }

    useEffect(() => {
        setData()
    }, [memorandum])

    return (
        <>
            <form id="memorandumForm" action="" onSubmit={sendForm} className="containerPequeño border border-success rounded-3 pt-3 d-flex flex-column align-items-center">
                <h1 className="mb-3 text-success">Registrar Memorandos</h1>
                {/* En caso de error canbio el tipo de dato del input documento */}
                <div className="col-9">
                    <input type="number" id="document" placeholder="Codigo Memorando" value={Id_Memorando} onChange={(e) => setId_Memorando(e.target.value)} className="form-control"/>
                </div>
                <div className="input-group flex-nowrap mt-3 d-flex justify-content-evenly">
                    <span className="input-group-text" id="addon-wrapping">Fec Memorando</span>
                    <div className="col-5">
                        <input type="date" id="dateMemorandum" value={Fec_Memorando} onChange={(e) => setFec_Memorando(e.target.value)} className="form-control col-5"/>
                    </div>
                </div>
                <div className="col-9 mt-3">
                    <input type="textarea" id="motivoMemorando" placeholder="Motivo Memorando" value={Mot_Memorando} onChange={(e) => setMot_Memorando(e.target.value)} className="form-control col-5"/>
                </div>
                <div className="col-9 mt-3">
                    <input type="text" id="inasistencia" placeholder="Inasistencia" value={Id_Inasistencia} onChange={(e) => setId_Inasistencia(e.target.value)} className="form-control col-5"/>
                </div>
                <input type="submit" id="button" value={buttonForm}  className="btn btn-outline-success col-2 m-3" aria-label="Enviar"/>
            </form>
        </>
    )
}
export default FormMemorandum