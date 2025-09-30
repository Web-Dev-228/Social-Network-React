import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Profile from './Profile'
import { getUserProfile, getUserStatus } from '../../redux/reducers/profileReducer'
import withAuthNavigation from '../../hoc/withAuthNavigation'
import withRouterProfile from '../../hoc/withRouterProfile'


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId || 2
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
        userStatus: state.profilePage.userStatus,
        userId: state.auth.data.id
    }
}


export default compose(
    withRouterProfile,
    withAuthNavigation,
    connect(mapStateToProps, { getUserProfile, getUserStatus })
)(ProfileContainer);