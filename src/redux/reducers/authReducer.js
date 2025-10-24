import { authAPI } from '../../API/authAPI'
import { stopSubmit } from 'redux-form'
import userBaseAvatar from '../images/profile/Avatar.png'

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_INFO = 'SET_USER_INFO';

let initialState = {
    userInfo: {
        fullName: 'name',
        photos: {
            small: userBaseAvatar,
            dig: null
        }
    },
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case DELETE_USER_DATA:
            return {
                ...state,
                ...initialState
            }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case SET_USER_INFO:
            return { ...state, userInfo: action.userInfo }
        default: return state;
    }
}

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo })
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const deleteAuthUserData = () => ({ type: DELETE_USER_DATA })

export const getAuthAndUserInfo = () => (dispatch) => {
    return authAPI.getAuthUserData()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login))
                authAPI.getUserInfo(id)
                    .then(response => {
                        dispatch(setUserInfo(response.data))
                    })
                    .catch(error => {
                        console.error("Ошибка загрузки данных:", error);
                    });
            }
        })
        .catch(error => {
            console.error("Ошибка загрузки данных:", error);
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthAndUserInfo())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('loginForm', { _error: message }));
            }
        })
}

export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(deleteAuthUserData())
            }
        })
}

export default authReducer;