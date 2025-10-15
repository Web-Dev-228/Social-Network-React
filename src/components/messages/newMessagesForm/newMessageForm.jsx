import { Field, reduxForm } from 'redux-form'
import css from './newMessageForm.module.css'

function newMessageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={css.SendMessage}>
        <Field placeholder='Напишите что-нибудь' name='newMessageText' component='input' className={css.Message} />
        <button className={css.AddMessage}>Send</button>
      </div>
    </form>
  )
}

const NewMessageReduxForm = reduxForm({ form: 'Messages_newMessageForm' })(newMessageForm)

export default NewMessageReduxForm;