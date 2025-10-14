import css from './Login.module.css'
import LoginReduxForm from './LoginForm'


function Login(props) {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <div className={css.Auth}>
                <h1>Login to Letter</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Login;