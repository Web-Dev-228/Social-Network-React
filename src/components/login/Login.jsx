import css from './Login.module.css'
import LoginReduxForm from './LoginForm'
import { login } from '../../redux/reducers/authReducer'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'


const Login = (props) => {
    console.log('isAuth:', props.isAuth);
    const onSubmit = (formData) => {
        let { email, password, rememberMe } = formData;
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    } return (
        <div>
            <div className={css.Auth}>
                <h1>Login to Letter</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);