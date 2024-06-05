import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FormMemorandum from "./formMemorandum.jsx"
import FormQueryMemorandum from "./formQueryMemorandum.jsx";


// Icons
import { MdDeleteOutline} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlinePreview } from "react-icons/md";

const URI = 'http://localhost:8000/memorando/'

const CrudMemorandum = () => {
    const [memorandumList, setMemorandumList] = useState([])
    const [buttonForm, setButtonForm] = useState('Enviar')

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

    return(
        <>
            <div className='table-responsive'>
                <table className='table mt-3 table-hover table-secondary table-bordered border-success text-center small fst-italic p-1'>
                    <caption>Memorandos encontrados!</caption>
                    <thead className='table-success'>
                        <tr>
                            <th>Cod Memorando</th>
                            <th>Fec Memorando</th>
                            <th>Mot_Memorando</th>
                            <th>Inasistencia</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memorandumList.map((memorandum) => (
                            <tr key={memorandum.Id_Memorando}>
                                <td>{memorandum.Id_Memorando}</td>
                                <td>{memorandum.Fec_Memorando}</td>
                                <td>{memorandum.Mot_Memorando}</td>
                                <td>{memorandum.Id_Inasistencia}</td>
                                <td>
                                    <button onClick={() => getMemorandum(memorandum.Id_Memorando)} className='btn btn-outline-success'><FaRegEdit/></button>
                                    <button onClick={() => deleteMemorandum(memorandum.Id_Memorando)} className='btn btn-outline-danger m-1'><MdDeleteOutline /></button>
                                    <button className="btn btn-outline-primary"><BsSendArrowUp /></button>
                                    <button className="btn btn-outline-secondary m-1"><MdOutlinePreview />Vista Previa</button>
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