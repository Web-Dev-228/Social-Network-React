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
        if (!userId) {
            return userId
        } else {
            return instance.get(`profile/` + userId)
        }
    },
    getUserStatus(userId) {
        if (!userId) {
            return userId
        } else {
            return instance.get(`profile/status/` + userId)
        }
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}