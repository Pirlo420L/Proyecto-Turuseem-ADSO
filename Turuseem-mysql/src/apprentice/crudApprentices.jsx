import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';'
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

    // const IconButton = ({ text, icon: Icon }) => {
    //     return (
    //         <button style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    //             {Icon && <Icon />} {text}
    //         </button>
    //     );
    // };

    return (
        <>
            <div className='table-responsive'>
                <table className='table mt-3 table-hover table-secondary table-bordered border-success text-center small fst-italic'>
                    <caption>Aprendices encontrados!</caption>
                    <thead className='table-success'>
                        <tr>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Ficha</th>
                            <th>Fec Nacimiento</th>
                            <th>Genero</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Tot Memorandos</th>
                            <th>Tot Inasistencias</th>
                            <th>Patrocinio</th>
                            <th>Centro Convivencia</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apprenticeList.map((apprentice) => (
                            <tr key={apprentice.Id_Aprendiz}>
                                <td>{apprentice.Id_Aprendiz}</td>
                                <td>{apprentice.Nom_Aprendiz}</td>
                                <td>{apprentice.Ape_Aprendiz}</td>
                                <td>{apprentice.Id_Ficha}</td>
                                <td>{apprentice.Fec_Nacimiento}</td>
                                <td>{apprentice.Gen_Aprendiz}</td>
                                <td>{apprentice.Cor_Aprendiz}</td>
                                <td>{apprentice.Tel_Aprendiz}</td>
                                <td>{apprentice.Tot_Memorandos}</td>
                                <td>{apprentice.Tot_Inasistencias}</td>
                                <td>{apprentice.Patrocinio}</td>
                                <td>{apprentice.CentroConvivencia}</td>
                                <td>
                                    <button onClick={() => getApprentice(apprentice.Id_Aprendiz)} className='btn btn-outline-success'><FaRegEdit/></button>
                                    <button onClick={() => deleteApprentice(apprentice.Id_Aprendiz)} className='btn btn-outline-danger m-1'><MdDeleteOutline /></button>
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