import Andrew from '../images/dialogs/Andrew.jpg';
import Viktor from '../images/dialogs/Viktor.jpg';
import Diana from '../images/dialogs/Diana.jpg';
import Egor from '../images/dialogs/Egor.jpg';
import Aleks from '../images/dialogs/Aleks.jpg';


let initialState = {
    messages: [
        { id: '1', name: 'Andrew', message: 'no', src: Andrew },
        { id: '2', name: 'Viktor', message: 'good idea', src: Viktor },
        { id: '3', name: 'Diana', message: 'nice ava', src: Diana },
        { id: '4', name: 'Egor', message: 'I released a new music track, check it out', src: Egor },
        { id: '5', name: 'Aleks', message: 'you are hired as a programmer for the position of react developer, you start tomorrow', src: Aleks }
    ],
    newMessageBody: ''
};


let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                name: 'Andrew',
                message: state.newMessageBody,
                src: Andrew
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newMessageBody,
            }
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text });


export default messagesReducer;