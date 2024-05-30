import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteOutline} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const FormQueryMemorandum = ({ URI, getMemorandum, deleteMemorandum, buttonForm}) => {
    const [memorandumQuery, setMemorandumQuery] = useState([])
    const [Id_Memorando, setId_Memorando] = useState('')

    const sendFormQuery = async (Id_Memorando) => {
        if (Id_Memorando) {
            const respuesta = await axios.get(URI+ 'codigo/'+Id_Memorando)

            setMemorandumQuery(
                respuesta.data
            )
        } else {
            setMemorandumQuery([])
        }
    }

    useEffect(() => {
        setMemorandumQuery([])
        setId_Memorando('')
    }, [buttonForm])

    return (
        <>
            <form action="" id="queryForm" className="containerPequeño border border-success rounded-3 d-flex flex-column align-items-center mb-5 mt-5">
                {/* <label htmlFor="documentQuery">Documento: </label> */}
                <div className="col-9">
                    <input type="number" id="codeQuery" placeholder="Buscar por codigo" className="mb-5 mt-5 form-control" value={Id_Memorando} onChange={(e) => { sendFormQuery(e.target.value);
                    setId_Memorando(e.target.value)
                }}/>
                </div>
            </form>
            <div className='table-responsive'>
                {memorandumQuery.length > 0 ? <table className='table mt-3 table-hover table-secondary table-bordered border-success text-center small fst-italic'>
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
                        {memorandumQuery.map((memorandum) => (
                            <tr key={memorandum.Id_Memorando}>
                                <td>{memorandum.Id_Memorando}</td>
                                <td>{memorandum.Fec_Memorando}</td>
                                <td>{memorandum.Mot_Memorando}</td>
                                <td>{memorandum.Id_Inasistencia}</td>
                                <td>
                                    <button onClick={() => getMemorandum(memorandum.Id_Memorando)} className='btn btn-outline-success'><FaRegEdit/></button>
                                    <button onClick={() => deleteMemorandum(memorandum.Id_Memorando)} className='btn btn-outline-danger m-1'><MdDeleteOutline /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : ''
                }
            </div>
        </>
    )
}
export default FormQueryMemorandum