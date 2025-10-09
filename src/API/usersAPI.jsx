import axios from 'axios'
import { API_KEY } from './API_KEY'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id) {
        return instance.post(`follow/` + id, {})
    },
    unfollow(id) {
        return instance.delete(`follow/` + id)
    }
} 