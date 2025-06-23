import DialogsItems from './Dialogs/DialogsItems'
import s from './Messages.module.css';

function Messages(props) {

  function onSendMessage() {
    props.sendMessage();
  }

  function onMessageChange(e) {
    props.messageChange(e.target.value);
  }

  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>
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
      <div className={s.SendTextarea}>
        <textarea placeholder='Напишите что-нибудь' onChange={onMessageChange} value={props.newMessageBody} className={s.Textarea} />
        <button onClick={onSendMessage} className={s.AddMessage}>Send</button>
      </div>
    </div>
  )
}

export default Messages;