/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Pagination = ({ URI, setDesde, setHasta }) => {
  const [numRegistros, setNumRegistros] = useState(0)
  const [registrosPorPagina, setRegistrosPorPagina] = useState(5)
  const [paginas, setPaginas] = useState(0)
  const [paginaActual, setPaginaActual] = useState(1)
  const [botones, setBotones] = useState([])

  const getAllApprentices = async () => {
    const token = localStorage.getItem("token")
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(URI, config)
    const cantidadRegistros = response.data.length
    setNumRegistros(cantidadRegistros)
    const pages = Math.ceil(cantidadRegistros / registrosPorPagina)
    setPaginas(pages)
  }

  useEffect(() => {
    getAllApprentices()
  }, [])

  useEffect(() => {
    paginar(paginaActual)
  }, [paginas, paginaActual])

  const paginar = (pagina) => {
    setPaginaActual(pagina)

    const desdePagina = ((pagina - 1) * registrosPorPagina)
    setDesde(desdePagina)

    const hastaPagina = pagina * registrosPorPagina
    setHasta(hastaPagina)

    const arregloAuxiliar = []
    for (let i = 0; i < paginas; i++) {
      if ((i + 1) === pagina) {
        arregloAuxiliar[i] = 'bg-green-600 text-white'
      } else {
        arregloAuxiliar[i] = 'bg-white'
      }
    }
    setBotones(arregloAuxiliar)
  }

  const anterior = () => {
    if (paginaActual > 1) {
      paginar(paginaActual - 1)
    }
  }

  const siguiente = () => {
    if (paginaActual < paginas) {
      paginar(paginaActual + 1)
    }
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => { anterior() }}
        >
          Anterior
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => { siguiente() }}
        >
          Siguiente
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando <span className="font-medium">{(paginaActual - 1) * registrosPorPagina + 1}</span> a <span className="font-medium">{Math.min(paginaActual * registrosPorPagina, numRegistros)}</span> de{' '}
            <span className="font-medium">{numRegistros}</span> registros.
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => { anterior() }}
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {botones.map((valorDeClase, key) => (
              <li key={key} className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${valorDeClase} focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 cursor-pointer ring-1 ring-inset ring-gray-300`} onClick={() => paginar(key + 1)}>
                {key + 1}
              </li>
            ))}
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => { siguiente() }}
            >
              <span className="sr-only">Siguiente</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
