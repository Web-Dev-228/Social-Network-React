import Profile from './Profile'
import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withRouterProfile from '../../hoc/withRouterProfile'
import withNavigateToLogin from '../../hoc/withNavigateToLogin'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/reducers/profileReducer'


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.navigateToLogin.navigate('/login');
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userInfo: state.profilePage.userInfo,
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}


export default compose(
    withRouterProfile, withNavigateToLogin,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
)(ProfileContainer);