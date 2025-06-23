import s from './Dialog.module.css';


function Dialog(props) {
  return (
    <div className={s.Dialog}>
      <img src={props.src} alt={props.src} />
      <div>
        <div className={s.Name}>
          {props.name}
        </div>
        <div className={s.Messages}>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default Dialog;