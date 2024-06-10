/* eslint-disable react/prop-types */



function Alerta({alerta}) {
    return (
        <>
        <div className={`${alerta.error ? "from-red-400 to-red-600" : "from-green-400 to-green-600" } bg-gradient-to-r text-center p-2 rounded-xl text-white font-bold mb-8`}>
            {alerta.msg}
        </div>



        </>
    )
}

export default Alerta