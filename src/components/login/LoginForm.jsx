import { Field, reduxForm } from 'redux-form'

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your login:'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Enter your password:'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={'input'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

export default LoginReduxForm;