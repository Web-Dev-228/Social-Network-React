import { connect } from 'react-redux';
import { compose } from 'redux'
import withAuthNavigation from '../../hoc/withAuthNavigation'
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

export default compose(
    withAuthNavigation,
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);