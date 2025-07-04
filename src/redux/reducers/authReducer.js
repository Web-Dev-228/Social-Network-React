import { authAPI } from '../../API/authAPI'
import userBaseAvatar from '../images/profile/Avatar.png'

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_INFO = 'SET_USER_INFO';

let initialState = {
    data: {},
    userInfo: {
        fullName: 'name',
        photos: {
            small: userBaseAvatar,
            dig: null
        }
    },
    isAuth: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, data: action.data,
                isAuth: true,
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

export const getAuthAndUserInfo = () => {
    return (dispatch) => {
        authAPI.getAuthUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login))
                    authAPI.getUserInfo(id)
                        .then(data => {
                            dispatch(setUserInfo(data))
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
}

export default authReducer;