import { Component } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { setUserProfile } from '../../redux/reducers/profileReducer'
import { profileAPI } from '../../API/profileAPI'


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
            userId = this.props.userId;
        }
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
            .catch(error => {
                console.error("Ошибка загрузки данных:", error);
            });
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
        userId: state.auth.data.id
    }
}


const WithUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(WithUrlContainerComponent);