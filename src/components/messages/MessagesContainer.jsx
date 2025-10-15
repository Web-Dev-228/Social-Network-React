import { connect } from 'react-redux';
import { compose } from 'redux'
import withAuthNavigation from '../../hoc/withAuthNavigation'
import Messages from './Messages'
import { addMessage } from '../../redux/reducers/messagesReducer'


function mapStateToProps(state) {
    return {
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessage(newMessageText))
        }
    }
}

export default compose(
    withAuthNavigation,
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);