import axios from 'axios'
import { API_KEY } from './API_KEY'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/'
})

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`` + userId)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId) {
        return instance.get(`status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(status) {
        return instance.put(`status/`)
    }
}