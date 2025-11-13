import { profileAPI } from '../../API/profileAPI'
import ifResponseCanBeUndefined from '../../hoc/ifResponseCanBeUndefined'
import Andrew from '../images/dialogs/Andrew.jpg';
import Diana from '../images/dialogs/Diana.jpg';
import Avatar from '../images/profile/avaAndrew.jpg';
import Background from '../images/profile/UserBackground.jpg';


let initialState = {
    userProfile: {
        aboutMe: null,
        contacts: { facebook: null, website: null, vk: null, twitter: null, instagram: null },
        fullName: "Andrew",
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: { small: Avatar, large: Background },
        userId: null
    },
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
let UPDATE_USER_PHOTO = 'UPDATE_USER_PHOTO'


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
        case UPDATE_USER_PHOTO:
            debugger
            return { ...state, userProfile: { ...state.userProfile, photos: action.photos } }
        default: return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setUserPhoto = (photos) => ({ type: UPDATE_USER_PHOTO, photos })


// Thunk
export const getUserProfileThunk = (userId, navigate) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId)
    ifResponseCanBeUndefined(response, setUserProfile, dispatch, navigate)
};

export const getUserStatusThunk = (userId, navigate) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    ifResponseCanBeUndefined(response, setUserStatus, dispatch, navigate)
};

export const updateUserStatusThunk = (status) => async () => {
    await profileAPI.updateUserStatus(status)
}

export const updateUserPhotoThunk = (userPhoto) => async (dispatch) => {
    debugger
    const response = await profileAPI.updateUserPhoto(userPhoto)
    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos))
    }
}


export default profileReducer;