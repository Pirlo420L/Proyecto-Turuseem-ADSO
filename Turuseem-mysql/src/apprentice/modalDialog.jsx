/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IdentificationIcon } from "@heroicons/react/24/outline";

const ModalDialog = ({
  getApprentice,
  deleteApprentice,
  onDoubleClickAppretice,
  setModalDialog,
  setStateAddApprentice
}) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => {}} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <IdentificationIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-green-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text- font-semibold leading-6 text-gray-900"
                  >
                    Informacion Aprendiz
                  </DialogTitle>
                  <div className="flex justify-center w-96">
                    <div className="mt-2 flex flex-col items-centr">
                      <p className="text-base text-gray-500 m-0.5">
                        Documento:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Id_Aprendiz}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Nombres:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Nom_Aprendiz}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Apellidos:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Ape_Aprendiz}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Ficha:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Id_Ficha}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Fecha Nacimmiento:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Fec_Nacimiento}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Genero:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Gen_Aprendiz}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Correo:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Cor_Aprendiz}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Telefono:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Tel_Aprendiz}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Total Memorandos:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Tot_Memorandos}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Total Inasistencias:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Tot_Inasistencias}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Patrocinio:{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.Patrocinio}
                        </span>
                      </p>
                      <p className="text-base text-gray-500 m-0.5">
                        Centro Convivencia{" "}
                        <span className="font-bold mx-2">
                          {onDoubleClickAppretice.CentroConvivencia}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                data-autofocus
                onClick={() => [
                  deleteApprentice(onDoubleClickAppretice.Id_Aprendiz),
                  setOpen(false),
                ]}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-red-700 px-4 ml-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 sm:mt-0 sm:w-auto"
              >
                Eliminar
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => [
                  getApprentice(onDoubleClickAppretice.Id_Aprendiz),
                  setOpen(false),
                  setModalDialog(false),
                  setStateAddApprentice(true),
                ]}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-green-600 hover:bg-green-100 sm:mt-0 sm:w-auto ml-4"
              >
                Editar
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => [setOpen(false), setModalDialog(false)]}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 hover:bg-red-50 sm:mt-0 sm:w-auto"
              >
                Cerrar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default ModalDialog;
