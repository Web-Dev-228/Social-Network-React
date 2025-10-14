import { connect } from 'react-redux';
import { compose } from 'redux'
import withAuthNavigation from '../../hoc/withAuthNavigation'
import Messages from './Messages'
import { addMessage } from '../../redux/reducers/messagesReducer'


function mapStateToProps(state) {
    return {
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (message) => {
            dispatch(addMessage(message))
        },
        // messageChange: (value) => {
        //     dispatch(updateNewMessageBodyActionCreator(value))
        // }
    }
}

export default compose(
    withAuthNavigation,
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);