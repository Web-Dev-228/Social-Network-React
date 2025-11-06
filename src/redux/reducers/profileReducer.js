import { profileAPI } from '../../API/profileAPI'
import Andrew from '../images/dialogs/Andrew.jpg';
import Diana from '../images/dialogs/Diana.jpg';
import Avatar from '../images/profile/avaAndrew.jpg';
import Background from '../images/profile/UserBackground.jpg';


let initialState = {
    userProfile: null,
    userInfo: { id: 1, name: 'Andrew', description: '+ description', userAvatar: Avatar, userBackground: Background },
    posts: [
        { id: 1, name: 'Andrew', message: 'Hi, i`m very good!', likesCount: 1, src: Andrew },
        { id: 2, name: 'Diana', message: 'Hi, how are you? I registered for the first time in this social network and I am looking for friends, and I would be very happy if it was you', likesCount: 12, src: Diana },
        { id: 3, name: 'Andrew', message: 'It`s my first post!', likesCount: 20, src: Andrew },
    ],
    status: ''
};

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_USER_STATUS = 'SET_USER_STATUS'


function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                name: 'Andrew',
                message: action.newPostText,
                likesCount: 0,
                src: Andrew
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile }
        case SET_USER_STATUS:
            return { ...state, status: action.status }
        default: return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })


// Thunk
export const getUserProfileThunk = (userId, navigate) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId)
    if (response === null) {
        dispatch(setUserProfile(response))
        navigate('/login')
    } else {
        dispatch(setUserProfile(response.data))
    }
};

export const getUserStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    if (response === null) {
        dispatch(setUserStatus(response))
    } else {
        dispatch(setUserStatus(response.data))
    }
};

export const updateUserStatusThunk = (status) => async (dispatch) => {
    await profileAPI.updateUserStatus(status)
}


export default profileReducer;