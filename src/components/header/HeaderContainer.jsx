import { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { getAuthAndUserInfo } from '../../redux/reducers/authReducer'

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuthAndUserInfo()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.userInfo.fullName,
        userPhoto: state.auth.userInfo.photos.small
    }
}

export default connect(mapStateToProps, { getAuthAndUserInfo })(HeaderContainer)