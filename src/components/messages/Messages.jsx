import DialogsItems from './Dialogs/DialogsItems'
import css from './Messages.module.css';
import NewMessageReduxForm from './newMessagesForm/newMessageForm'

function Messages(props) {

  function addMessage(formData) {
    props.addMessage(formData.newMessageText);
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
      <NewMessageReduxForm onSubmit={addMessage} />
    </div>
  )
}

export default Messages;