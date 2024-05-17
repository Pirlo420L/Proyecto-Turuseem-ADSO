import axios from "axios";
import { useEffect, useState } from "react";

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
            <form action="" id="queryForm">
                <label htmlFor="documentQuery">Documento: </label>
                <input type="number" id="documentQuery" value={Id_Aprendiz} onChange={(e) => { sendFormQuery(e.target.value);
                    setId_Aprendiz(e.target.value)
                }}/>
            </form>
            {/*  */}
                {apprenticeQuery.length > 0 ? <table>
                    <thead>
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
                        {apprenticeQuery.map((apprentice) => (
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
                                    <button onClick={() => getApprentice(apprentice.Id_Aprendiz)}>Editar</button>
                                    <button onClick={() => deleteApprentice(apprentice.Id_Aprendiz)}>Borrar</button>
                                </td>
                        </tr>
                        ))}
                    </tbody>
                </table> : ''
                }
        </>
    )
}
export default FormQueryApprentices