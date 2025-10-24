import { getAuthAndUserInfo } from './authReducer'

let initialState = {
    inicialized: false
};


let INICIALIZED_SUCCESS = 'ADD-INICIALIZED_SUCCESS';

function appReducer(state = initialState, action) {
    switch (action.type) {
        case INICIALIZED_SUCCESS:
            return {
                ...state,
                inicialized: true
            }
        default: return state;
    }
}

export const inicializedSuccess = () => ({ type: INICIALIZED_SUCCESS });

export const inicializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthAndUserInfo())
    promise.then(() => {
        dispatch(inicializedSuccess())
    })
}

export default appReducer;