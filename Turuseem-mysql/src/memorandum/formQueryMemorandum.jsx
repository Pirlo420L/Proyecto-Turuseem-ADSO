import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteOutline} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlinePreview } from "react-icons/md";


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
        <div className="flex justify-center bg-gray-100 content-center w-full mb-8" >
            <form action="" id="queryForm" className="bg-white shadow-2xl rounded-2xl px-14 pt-6 pb-8 mb-4 max-w-3xl w-full mt-10">
            <h1 className="font-bold text-green-600 text-3xl uppercase text-center my-5">Buscar Memorandos</h1>
                <div className="mb-3">
                    <input type="number" id="codeQuery" placeholder="Buscar por codigo" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={Id_Memorando} onChange={(e) => { sendFormQuery(e.target.value);
                    setId_Memorando(e.target.value)
                }}/>
                </div>
            </form>
        </div>
            <div className='overflow-x-auto'>
                {memorandumQuery.length > 0 ? <table className='min-w-full bg-white text-center text-sm'>
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
                        {memorandumQuery.map((memorandum) => (
                            <tr key={memorandum.Id_Memorando} className="odd:bg-white even:bg-gray-100">
                                <td className='py-2 px-4 border-b'>{memorandum.Id_Memorando}</td>
                                <td className='py-2 px-4 border-b'>{memorandum.Fec_Memorando}</td>
                                <td className='py-2 px-4 border-b'>{memorandum.Mot_Memorando}</td>
                                <td className='py-2 px-4 border-b'>{memorandum.Id_Inasistencia}</td>
                                <td className='py-2 px-4 border-b'>
                                    <button onClick={() => getMemorandum(memorandum.Id_Memorando)} className='text-blue-500 hover:text-blue-700 hover:border hover:border-blue-500 mr-3 p-1 rounded'><FaRegEdit/></button>
                                    <button onClick={() => deleteMemorandum(memorandum.Id_Memorando)} className='text-red-500 hover:text-red-700 hover:border hover:border-red-500 p-1 rounded'><MdDeleteOutline /></button>
                                    <button className="text-indigo-500 hover:text-indigo-700 hover:border hover:border-indigo-500 p-1 rounded"><BsSendArrowUp /></button>
                                    <button className="text-gray-500 hover:text-gray-700 hover:border hover:border-gray-500 p-1 rounded mx-2"><MdOutlinePreview />Ver</button>
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