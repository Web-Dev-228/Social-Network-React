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
    newPostText: ''
};

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE'


function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                name: 'Andrew',
                message: state.newPostText,
                likesCount: 0,
                src: Andrew
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newPostText, }
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile }
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })


export default profileReducer;