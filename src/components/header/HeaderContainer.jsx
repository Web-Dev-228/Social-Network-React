import { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import Header from './Header'
import { setAuthUserData, setUserInfo } from '../../redux/reducers/authReducer'

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                    console.log(id, email, login)
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                        .then(response => {
                            this.props.setUserInfo(response.data)
                            console.log(response.data)
                        })
                        .catch(error => {
                            console.error("Ошибка загрузки данных:", error);
                        });
                }
            })
            .catch(error => {
                console.error("Ошибка загрузки данных:", error);
            });
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

export default connect(mapStateToProps, { setAuthUserData, setUserInfo })(HeaderContainer)