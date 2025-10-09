import axios from 'axios'
import { API_KEY } from './API_KEY'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getUserInfo(id) {
        return instance.get(`profile/` + id)
    }
}