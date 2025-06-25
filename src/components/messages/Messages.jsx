import DialogsItems from './Dialogs/DialogsItems'
import css from './Messages.module.css';

function Messages(props) {

  function onSendMessage() {
    props.sendMessage();
  }

  function onMessageChange(e) {
    props.messageChange(e.target.value);
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
      <div className={css.SendTextarea}>
        <textarea placeholder='Напишите что-нибудь' onChange={onMessageChange} value={props.newMessageBody} className={css.Textarea} />
        <button onClick={onSendMessage} className={css.AddMessage}>Send</button>
      </div>
    </div>
  )
}

export default Messages;