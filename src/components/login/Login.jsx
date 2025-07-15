import css from './Login.module.css'


function Login() {
    return (
        <div>
            <div className={css.Auth}>
                <h1>Login to Letter</h1>
                <div>Enter your login:</div>
                <div>Enter your password:</div>
            </div>
        </div>
    )
}

export default Login;