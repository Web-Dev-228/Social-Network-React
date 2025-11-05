import { usersAPI } from '../../API/usersAPI'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

let FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID) {
                        return { ...users, followed: action.value }
                    }
                    return users
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: return state
    }
}

export const followUnfollow = (userID, value) => ({ type: FOLLOW_UNFOLLOW, userID, value })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (followingProgress, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, followingProgress, userId })


// Thunk
export const getUsersThunk = (pageNumber, currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(pageNumber, currentPage, pageSize)
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const followUnfollowThunk = (userId, value) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await (value === true
        ? usersAPI.follow(userId)
        : usersAPI.unfollow(userId));
    if (response.data.resultCode === 0) {
        dispatch(followUnfollow(userId, value))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export default usersReducer;