import { Field, reduxForm } from 'redux-form'
import css from './newMessageForm.module.css'
import { required, maxLengthCreator, minLengthCreator } from '../../../Utilites/validators/Validates'
import { FormControl } from '../../../common/FormsControls/FormsConrols'

const maxLength50 = maxLengthCreator(50);
const minLength1 = minLengthCreator(1);
const Textarea = FormControl('textarea')

function newMessageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={css.FormContainer}>
        <Field placeholder='Напишите что-нибудь' name='newMessageText' component={Textarea}
          validate={[required, maxLength50, minLength1]} className={css.Message} />
        <button className={css.AddMessage}>Send</button>
      </div>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({ form: 'Messages_newMessageForm' })(newMessageForm)

export default NewMessageReduxForm;