import DialogsItems from './Dialogs/DialogsItems'
import css from './Messages.module.css';
import { Field, reduxForm } from 'redux-form'

function Messages(props) {

  // function onMessageChange(e) {
  //   props.messageChange(e.target.value);
  // }

  function onSubmit(message) {
    props.addMessage(message.message);
  }

  return (
    <div className={css.Dialogs}>
      <div className={css.DialogsItems}>
        {props.messages.map(item =>
          <DialogsItems
            key={item.id}
            id={item.id}
            name={item.name}
            message={item.message}
            src={item.src}
          />
        )}
      </div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

function messageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={css.SendMessage}>
        <Field placeholder={'Напишите что-нибудь'} name={'message'} component={'input'} className={css.Message} />
        <button className={css.AddMessage}>Send</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm({ form: 'message' })(messageForm)

export default Messages;