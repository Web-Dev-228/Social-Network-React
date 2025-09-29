import Andrew from './images/dialogs/Andrew.jpg';
import Viktor from './images/dialogs/Viktor.jpg';
import Diana from './images/dialogs/Diana.jpg';
import Egor from './images/dialogs/Egor.jpg';
import Aleks from './images/dialogs/Aleks.jpg';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, name: 'Andrew', message: 'Hi, i`m very good!', likesCount: 1, src: Andrew },
                { id: 2, name: 'Diana', message: 'Hi, how are you? I registered for the first time in this social network and I am looking for friends, and I would be very happy if it was you', likesCount: 12, src: Diana },
                { id: 3, name: 'Andrew', message: 'It`s my first post!', likesCount: 20, src: Andrew },
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                { id: '1', name: 'Andrew', message: 'no', src: Andrew },
                { id: '2', name: 'Viktor', message: 'good idea', src: Viktor },
                { id: '3', name: 'Diana', message: 'nice ava', src: Diana },
                { id: '4', name: 'Egor', message: 'I released a new music track, check it out', src: Egor },
                { id: '5', name: 'Aleks', message: 'you are hired as a programmer for the position of react developer, you start tomorrow', src: Aleks }
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Andrew', src: Andrew },
                { id: 2, name: 'Viktor', src: Viktor },
                { id: 3, name: 'Diana', src: Diana },
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._rerenderEntireTree();
    }
}


export default store;

import Andrew from './images/dialogs/Andrew.jpg';
import Viktor from './images/dialogs/Viktor.jpg';
import Diana from './images/dialogs/Diana.jpg';
import Egor from './images/dialogs/Egor.jpg';
import Aleks from './images/dialogs/Aleks.jpg';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';