import { Field, reduxForm } from 'redux-form'
import css from './newPostForm.module.css'
import { required, maxLengthCreator, minLengthCreator } from '../../../../Utilites/validators/Validates'
import { FormControl } from '../../../../common/FormsControls/FormsConrols'

const maxLength20 = maxLengthCreator(20);
const minLength1 = minLengthCreator(1);
const Textarea = FormControl('textarea')

function newPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Напишите что-нибудь' name='newPostText'
                    component={Textarea} validate={[required, maxLength20, minLength1]} className={css.Textarea} />
                <button className={css.AddPost}>Add Post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({ form: 'Profile_newPostForm' })(newPostForm)

export default NewPostReduxForm;