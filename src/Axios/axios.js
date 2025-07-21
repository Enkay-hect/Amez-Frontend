import axios from "axios"
import vuexStore from "../stores"

const axiosClient = axios.create({
    baseURL: 'https://amez-ewaed.org/api'
})

axiosClient.interceptors.request.use(config=> {
    config.headers.Authorization = `Bearer ${vuexStore.state.user.token}`
    return config
})

export default axiosClient;
