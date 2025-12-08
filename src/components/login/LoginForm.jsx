import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator, minLengthCreator } from '../../Utilites/validators/Validates'
import { FormControl } from '../../common/FormsControls/FormsConrols'
import css from './Login.module.css'

const maxLength30 = maxLengthCreator(30);
const minLength1 = minLengthCreator(1);
const Input = FormControl('input')

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' placeholder='Enter your login:' component={Input}
                    validate={[required, maxLength30, minLength1]} />
            </div>
            <div>
                <Field name='password' type='password' placeholder='Enter your password:' component={Input}
                    validate={[required, maxLength30, minLength1]} />
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component='input'
                    validate={[required]} /> remember me
            </div>
            <div className={css.IncorrectEmailOrPassword}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

export default LoginReduxForm;