import axios from 'axios';
import { useState, useEffect } from 'react';
import FormApprentices from './formApprentices.jsx'
import FormQueryApprentices from './formQueryApprentices.jsx';
import Swal from 'sweetalert2'
import { MdDeleteOutline} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const URI = 'http://localhost:8000/aprendiz/'

const CrudApprentices = () => {
    const [apprenticeList, setApprenticeList] = useState([])
    // eslint-disable-next-line react/jsx-key
    const [buttonForm, setButtonForm] = useState('Enviar')

    const [apprentice, setApprentice] = useState({
        Id_Aprendiz: '',
        Nom_Aprendiz: '',
        Ape_Aprendiz: '',
        Id_Ficha: '',
        Fec_Nacimiento: '',
        Gen_Aprendiz: '',
        Cor_Aprendiz: '',
        Tel_Aprendiz: '',
        Tot_Memorandos: '',
        Tot_Inasistencias: '',
        Patrocinio: '',
        CentroConvivencia: ''
    })

    useEffect(() => {
        getAllApprentices()
    }, [apprenticeList])

    const getAllApprentices = async () => {
        const respuesta = await axios.get(URI)

        setApprenticeList(respuesta.data)
    }
    const getApprentice = async (Id_Aprendiz) => {
        setButtonForm('Actualizar')
        const respuesta = await axios.get(URI + Id_Aprendiz)

        setApprentice({
            ...respuesta.data
        })
    } 
    const updateTextButton = (text) => {
        setButtonForm(text)
    }

    const deleteApprentice = (Id_Aprendiz) => {
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
                await axios.delete(URI + Id_Aprendiz)
                updateTextButton("Enviar")
                Swal.fire({
                title: "Borrado!",
                text: "El registro ha sido borrado.",
                icon: "success"
            });
            }
        });
    }


    return (
        <>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white text-center text-sm'>
                    <thead className='text-white bg-green-700'>
                        <tr className=''>
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
                        {apprenticeList.map((apprentice) => (
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
                                    <button onClick={() => getApprentice(apprentice.Id_Aprendiz)} className='text-blue-500 hover:text-blue-700 hover:border hover:border-blue-500 mr-3 p-1 rounded'><FaRegEdit/></button>
                                    <button onClick={() => deleteApprentice(apprentice.Id_Aprendiz)} className='text-red-500 hover:text-red-700 hover:border hover:border-red-500 p-1 rounded'><MdDeleteOutline /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr/>
            <FormApprentices buttonForm={buttonForm} apprentice={apprentice} URI={URI} updateTextButton={updateTextButton}/>
            <hr/>
            <FormQueryApprentices URI={URI} getApprentice={getApprentice} deleteApprentice={deleteApprentice} buttonForm={buttonForm} />
        </>
    )
}
export default CrudApprentices