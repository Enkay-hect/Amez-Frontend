import axios from "axios"
import vuexStore from "../stores"

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api'
})

axiosClient.interceptors.request.use(config=> {
    config.headers.Authorization = `Bearer ${vuexStore.state.user.token}`
    return config
})

export default axiosClient;
