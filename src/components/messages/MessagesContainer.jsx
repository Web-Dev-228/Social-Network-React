import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import Messages from './Messages'
import { addMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/reducers/messagesReducer'


function mapStateToProps(state) {
    return {
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
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

function AuthNavigateComponent(props) {
    if (!props.isAuth) return <Navigate to='/login' />;
    return <Messages {...props} />
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default MessagesContainer;