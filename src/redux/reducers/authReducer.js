

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_INFO = 'SET_USER_INFO';

let initialState = {
    data: {},
    userInfo: {},
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
            return { ...state, userInfo: action.userInfo}
        default: return state;
    }
}

export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo })
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

export default authReducer;