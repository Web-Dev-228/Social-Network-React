import { Field, reduxForm } from 'redux-form'
import css from './newPostForm.module.css'

function newPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Напишите что-нибудь' name='newPostText' component='textarea' className={css.Textarea} />
                <button className={css.AddPost}>Add Post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({ form: 'Profile_newPostForm' })(newPostForm)

export default NewPostReduxForm;