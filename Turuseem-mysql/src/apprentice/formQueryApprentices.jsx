/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const FormQueryApprentices = ({ URI, buttonForm, setApprenticeQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

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
    </>
  );
};
export default FormQueryApprentices;
