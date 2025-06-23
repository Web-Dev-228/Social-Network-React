import { connect } from 'react-redux';
import Messages from './Messages'
import { addMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/reducers/messagesReducer'


function mapStateToProps(state) {
    return {
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        messageChange: (value) => {
            dispatch(updateNewMessageBodyActionCreator(value))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;