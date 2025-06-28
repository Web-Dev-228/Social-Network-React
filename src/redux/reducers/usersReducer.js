// import Andrew from '../images/dialogs/Andrew.jpg';
// import Viktor from '../images/dialogs/Viktor.jpg';
// import Diana from '../images/dialogs/Diana.jpg';
// import Egor from '../images/dialogs/Egor.jpg';
// import Aleks from '../images/dialogs/Aleks.jpg';
// import axios from 'axios'

let initialState = {
    users: [
        // { id: 1, name: 'Andrew', followed: false, status: 'I am looking for a job right now', location: { city: 'United States', country: 'California' }, src: Andrew },
        // { id: 2, name: 'Viktor', followed: true, status: 'I love programming', location: { city: 'Belarus', country: 'Gomel' }, src: Viktor },
        // { id: 3, name: 'Diana', followed: true, status: 'I am so pretty!', location: { city: 'Belarus', country: 'Svetlogorsk' }, src: Diana },
        // { id: 4, name: 'Egor', followed: true, status: 'I like football!', location: { city: 'Belarus', country: 'Gomel' }, src: Egor },
        // { id: 5, name: 'Aleks', followed: false, status: 'I am free to help you to create good Video Production', location: { city: 'Belarus', country: 'Minsk' }, src: Aleks }
    ],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.pageNumber }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default: return state
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })



export default usersReducer;