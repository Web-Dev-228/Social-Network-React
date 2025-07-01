import axios from 'axios'
import { API_KEY } from './API_KEY'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}