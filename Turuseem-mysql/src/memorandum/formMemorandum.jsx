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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 content-center w-full">
            <form id="memorandumForm" action="" onSubmit={sendForm} className="bg-white shadow-2xl rounded-2xl px-14 pt-6 pb-8 mb-4 max-w-3xl w-full mt-10">
                <h1 className="font-bold text-green-600 text-3xl uppercase text-center my-5">Registrar Memorandos</h1>

                <div className="mb-3">
                    <label htmlFor="document" className="text-gray-700 uppercase font-bold">Codigo de Memorando</label>
                    <input type="number" id="document" placeholder="Codigo Memorando" value={Id_Memorando} onChange={(e) => setId_Memorando(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="document" className="text-gray-700 uppercase font-bold">Fecha Memorando</label>
                    <input type="date" id="dateMemorandum" value={Fec_Memorando} onChange={(e) => setFec_Memorando(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="document" className="text-gray-700 uppercase font-bold">Motivo Memorando</label>
                    <input type="textarea" id="motivoMemorando" placeholder="Motivo del Memorando" value={Mot_Memorando} onChange={(e) => setMot_Memorando(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="document" className="text-gray-700 uppercase font-bold">Inasistencia</label>
                    <input type="text" id="inasistencia" placeholder="Codigo de Inasistencia" value={Id_Inasistencia} onChange={(e) => setId_Inasistencia(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <input type="submit" id="button" value={buttonForm}  className="bg-green-600 w-full py-3 px-8 rounded-xl text-white mt-2 uppercase font-bold hover:cursor-pointer hover:bg-green-700 md:w-auto" aria-label="Enviar"/>
            </form>
        </div>
        </>
    )
}
export default FormMemorandum