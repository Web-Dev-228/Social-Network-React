import Profile from './Profile'
import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withRouterProfile from '../../hoc/withRouterProfile'
import withNavigateToLogin from '../../hoc/withNavigateToLogin'
import { getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk, updateUserPhotoThunk, updateProfileInfoThunk }
    from '../../redux/reducers/profileReducer'


class ProfileContainer extends Component {

    getProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.navigateToLogin.navigate('/login');
            }
        }
        this.props.getUserProfileThunk(userId, this.props.navigateToLogin.navigate)
        this.props.getUserStatusThunk(userId, this.props.navigateToLogin.navigate)
    }

    componentDidMount() {
        this.getProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile()
        }
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
    connect(mapStateToProps,
        { getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk, updateUserPhotoThunk, updateProfileInfoThunk })
)(ProfileContainer);