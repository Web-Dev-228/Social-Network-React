import { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { setAuthUserData, setUserInfo } from '../../redux/reducers/authReducer'
import { headerAPI } from '../../API/headerAPI'

class HeaderContainer extends Component {

    componentDidMount() {
        headerAPI.getAuthUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setAuthUserData(id, email, login)
                    headerAPI.getUserInfo(id)
                        .then(data => {
                            this.props.setUserInfo(data)
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