/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const FormQueryApprentices = ({
  URI,
  getApprentice,
  deleteApprentice,
  buttonForm,
  searchQuery, setSearchQuery
}) => {
  const [apprenticeQuery, setApprenticeQuery] = useState([]);
  const sendFormQuery = async (query) => {
    if (query) {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let endpoint;
      if (/^\d+$/.test(query)) {
        endpoint = `${URI}documento/${query}`;
      } else {
        endpoint = `${URI}nombre/${query}`;
      }
      try {
        const respuesta = await axios.get(endpoint, config);
        setApprenticeQuery(respuesta.data);
      } catch (error) {
        console.error("Error al traer el registro", error);
        setApprenticeQuery([]);
      }
    } else {
      setApprenticeQuery([]);
    }
  };

  useEffect(() => {
    setApprenticeQuery([]);
    setSearchQuery("");
  }, [buttonForm]);

  return (
    <>
      <div className="flex content-center w-96">
        <form
          action=""
          id="queryForm"
          className="bg-white  rounded-2xl max-w-3xl w-full"
        >
          <div className="mb-4">
            <input
              type="text"
              id="documentQuery"
              placeholder="Buscar Aprendices..."
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={searchQuery}
              onChange={(e) => {
                const { value } = e.target;
                setSearchQuery(value);
                sendFormQuery(value);
              }}
            />
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        {apprenticeQuery.length > 0 ? (
          <table className="min-w-full bg-white text-center text-sm">
            <thead className="text-white bg-green-700">
              <tr>
                <th className="py-2 px-4 border-2 border-b-gray-500">
                  Documento
                </th>
                <th className="py-2 px-4 border-2 border-b-gray-500">
                  Nombres
                </th>
                <th className="py-2 px-4 border-2 border-b-gray-500">
                  Apellidos
                </th>
                <th className="py-2 px-4 border-2 border-b-gray-500">Ficha</th>
                {/* <th className='py-2 px-4 border-2 border-b-gray-500'>Fec Nacimiento</th> */}
                <th className="py-2 px-4 border-2 border-b-gray-500">Genero</th>
                <th className="py-2 px-4 border-2 border-b-gray-500">Correo</th>
                <th className="py-2 px-4 border-2 border-b-gray-500">
                  Telefono
                </th>
                {/* <th className='py-2 px-4 border-2 border-b-gray-500'>Tot Memorandos</th> */}
                {/* <th className='py-2 px-4 border-2 border-b-gray-500'>Tot Inasistencias</th> */}
                {/* <th className='py-2 px-4 border-2 border-b-gray-500'>Patrocinio</th> */}
                {/* <th className='py-2 px-4 border-2 border-b-gray-500'>Centro Convivencia</th> */}
                <th className="py-2 px-4 border-2 border-b-gray-500">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {apprenticeQuery.map((apprentice) => (
                <tr
                  key={apprentice.Id_Aprendiz}
                  className="odd:bg-white even:bg-gray-100"
                >
                  <td className="py-2 px-4 border-b">
                    {apprentice.Id_Aprendiz}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {apprentice.Nom_Aprendiz}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {apprentice.Ape_Aprendiz}
                  </td>
                  <td className="py-2 px-4 border-b">{apprentice.Id_Ficha}</td>
                  {/* <td className='py-2 px-4 border-b'>{apprentice.Fec_Nacimiento}</td> */}
                  <td className="py-2 px-4 border-b">
                    {apprentice.Gen_Aprendiz}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {apprentice.Cor_Aprendiz}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {apprentice.Tel_Aprendiz}
                  </td>
                  {/* <td className='py-2 px-4 border-b'>{apprentice.Tot_Memorandos}</td> */}
                  {/* <td className='py-2 px-4 border-b'>{apprentice.Tot_Inasistencias}</td> */}
                  {/* <td className='py-2 px-4 border-b'>{apprentice.Patrocinio}</td> */}
                  {/* <td className='py-2 px-4 border-b'>{apprentice.CentroConvivencia}</td> */}
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => getApprentice(apprentice.Id_Aprendiz)}
                      className="text-blue-500 hover:text-blue-700 hover:border hover:border-blue-500 mr-3 p-1 rounded"
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      onClick={() => deleteApprentice(apprentice.Id_Aprendiz)}
                      className="text-red-500 hover:text-red-700 hover:border hover:border-red-500 p-1 rounded"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default FormQueryApprentices;
