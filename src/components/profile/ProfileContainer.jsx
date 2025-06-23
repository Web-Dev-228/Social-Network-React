import { Component } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Profile from './Profile'
import { setUserProfile } from '../../redux/reducers/profileReducer'


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
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
            .catch(error => {
                console.error("Ошибка загрузки данных:", error);
            });
    }


    render() {
        console.log(this.props.userProfile)
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
        userProfile: state.profilePage.userProfile
    }
}


const WithUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(WithUrlContainerComponent);