import { Component } from 'react'
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom'
import Profile from './Profile'
import { getUserProfile } from '../../redux/reducers/profileReducer'


export function withRouter(ProfileContainer) {
    return (props) => {
        const match = { params: useParams() };
        return <ProfileContainer {...props} match={match} />
    }
}

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId || 2
        }
        this.props.getUserProfile(userId)
    }


    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

function AuthNavigateComponent(props) {
    if (!props.isAuth) return <Navigate to='/login' />;
    return <ProfileContainer {...props} />
}

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userInfo: state.profilePage.userInfo,
        userProfile: state.profilePage.userProfile,
        userId: state.auth.data.id,
        isAuth: state.auth.isAuth
    }
}


const WithUrlContainerComponent = withRouter(AuthNavigateComponent)
export default connect(mapStateToProps, { getUserProfile })(WithUrlContainerComponent);