import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const FormQueryApprentices = ({ URI, getApprentice, deleteApprentice, buttonForm}) => {
    const [ apprenticeQuery, setApprenticeQuery ] = useState([])
    const [ Id_Aprendiz, setId_Aprendiz] = useState('')

    const sendFormQuery = async (Id_Aprendiz) => {
        if (Id_Aprendiz) {
            const respuesta = await axios.get(URI + 'documento/'+ Id_Aprendiz)

            setApprenticeQuery(
                respuesta.data
            )
        } else {
            setApprenticeQuery([])
        }
    }

    useEffect(() => {
        setApprenticeQuery([])
        setId_Aprendiz('')
    }, [buttonForm])

    return (
        <>
        <div className="flex justify-center  bg-gray-100 content-center w-full mb-8" >
            <form action="" id="queryForm" className="bg-white shadow-2xl rounded-2xl px-14 pt-6 pb-8 mb-4 max-w-3xl w-full mt-10">
                <h1 className="font-bold text-green-600 text-3xl uppercase text-center my-5">Buscar Aprendices</h1>
                <div className="mb-3">
                    <input type="number" id="documentQuery" placeholder="Buscar por Documento" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={Id_Aprendiz} onChange={(e) => { sendFormQuery(e.target.value);
                    setId_Aprendiz(e.target.value)
                }}/>
                </div>
            </form>
        </div>
            <div className="overflow-x-auto">
                {apprenticeQuery.length > 0 ? 
                <table className="min-w-full bg-white text-center text-sm">
                    <thead className="text-white bg-green-700">
                        <tr>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Documento</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Nombres</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Apellidos</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Ficha</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Fec Nacimiento</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Genero</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Correo</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Telefono</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Tot Memorandos</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Tot Inasistencias</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Patrocinio</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Centro Convivencia</th>
                            <th className='py-2 px-4 border-2 border-b-gray-500'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apprenticeQuery.map((apprentice) => (
                            <tr key={apprentice.Id_Aprendiz} className='odd:bg-white even:bg-gray-100'>
                                <td className='py-2 px-4 border-b'>{apprentice.Id_Aprendiz}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Nom_Aprendiz}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Ape_Aprendiz}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Id_Ficha}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Fec_Nacimiento}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Gen_Aprendiz}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Cor_Aprendiz}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Tel_Aprendiz}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Tot_Memorandos}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Tot_Inasistencias}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.Patrocinio}</td>
                                <td className='py-2 px-4 border-b'>{apprentice.CentroConvivencia}</td>
                                <td className='py-2 px-4 border-b'>
                                    <button onClick={() => getApprentice(apprentice.Id_Aprendiz)} className="text-blue-500 hover:text-blue-700 hover:border hover:border-blue-500 mr-3 p-1 rounded"><FaRegEdit/></button>
                                    <button onClick={() => deleteApprentice(apprentice.Id_Aprendiz)} className='text-red-500 hover:text-red-700 hover:border hover:border-red-500 p-1 rounded'><MdDeleteForever /></button>
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
export default FormQueryApprentices