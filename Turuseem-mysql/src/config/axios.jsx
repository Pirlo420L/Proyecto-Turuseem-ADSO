import axios from "axios";

const clieteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

export default clieteAxios