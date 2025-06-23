import { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import Profile from './Profile'
import { setUserProfile } from '../../redux/reducers/profileReducer'


class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);