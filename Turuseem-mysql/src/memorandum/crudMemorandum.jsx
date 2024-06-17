import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FormMemorandum from "./formMemorandum.jsx"
import FormQueryMemorandum from "./formQueryMemorandum.jsx";
import MemorandumPDF from "./MemorandumPDF.jsx";
import { PDFViewer } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";


// Icons
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlinePreview } from "react-icons/md";

const URI = 'http://localhost:8000/memorando/'

const CrudMemorandum = () => {
    const [memorandumList, setMemorandumList] = useState([])
    const [buttonForm, setButtonForm] = useState('Enviar')
    const [verPDF, setVerPDF] = useState(false)
    const navigate = useNavigate()

    const [memorandum, setMemorandum] = useState({
        Id_Memorando: '',
        Fec_Memorando: '',
        Mot_Memorando: '',
        Id_Inasistencia: ''
    })

    useEffect(()=> {
        getAllMemorandum()
    }, [memorandumList])

    const getAllMemorandum = async () => {
        const respuesta = await axios.get(URI)

        setMemorandumList(respuesta.data)
    }

    const getMemorandum = async (Id_Memorando) => {
        setButtonForm('Actualizar')
        console.log(Id_Memorando);
        const respuesta = await axios.get(URI + Id_Memorando)

        setMemorandum({
            ...respuesta.data
        })
    }

    const updateTextButton = (text) => {
        setButtonForm(text)
    }

    const deleteMemorandum = (Id_Memorando) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "No podras revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borrar!",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(URI + Id_Memorando)
                updateTextButton("Enviar")
                Swal.fire({
                title: "Borrado!",
                text: "El registro ha sido borrado.",
                icon: "success"
            });
            }
        });
    }
    const mostrarPdf = () => {
        navigate("/admin/PdfView")
    }

    return(
        <>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white text-center text-sm'>
                    <thead className='text-white bg-green-700'>
                        <tr>
                            <th className="py-2 px-4 border-2 border-b-gray-500">Cod Memorando</th>
                            <th className="py-2 px-4 border-2 border-b-gray-500">Fec Memorando</th>
                            <th className="py-2 px-4 border-2 border-b-gray-500">Mot_Memorando</th>
                            <th className="py-2 px-4 border-2 border-b-gray-500">Inasistencia</th>
                            <th className="py-2 px-4 border-2 border-b-gray-500">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memorandumList.map((memorandum) => (
                            <tr key={memorandum.Id_Memorando} className="odd:bg-white even:bg-gray-100">
                                <td className='py-2 px-4 border-b'>{memorandum.Id_Memorando}</td>
                                <td className='py-2 px-4 border-b'>{memorandum.Fec_Memorando}</td>
                                <td className='py-2 px-4 border-b'>{memorandum.Mot_Memorando}</td>
                                <td className='py-2 px-4 border-b'>{memorandum.Id_Inasistencia}</td>
                                <td className='py-2 px-4 border-b'>
                                    <button onClick={() => getMemorandum(memorandum.Id_Memorando)} className='text-blue-500 hover:text-blue-700 hover:border hover:border-blue-500 mr-3 p-1 rounded'><FaRegEdit/></button>
                                    <button onClick={() => deleteMemorandum(memorandum.Id_Memorando)} className='text-red-500 hover:text-red-700 hover:border hover:border-red-500 p-1 rounded '><MdDeleteForever/></button>
                                    <button className="text-indigo-500 hover:text-indigo-700 hover:border hover:border-indigo-500 p-1 rounded"><BsSendArrowUp /></button>
                                    <button className="text-gray-500 hover:text-gray-700 hover:border hover:border-gray-500 p-1 rounded mx-2" onClick={mostrarPdf}><MdOutlinePreview />Ver</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr/>
            <FormMemorandum buttonForm={buttonForm} memorandum={memorandum} URI={URI} updateTextButton={updateTextButton}/>
            <hr/>
            <FormQueryMemorandum URI={URI} getMemorandum={getMemorandum} deleteMemorandum={deleteMemorandum} buttonForm={buttonForm}/>
        </>
    )
}
export default CrudMemorandum