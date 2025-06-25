import css from './Dialog.module.css';


function Dialog(props) {
  return (
    <div className={css.Dialog}>
      <img src={props.src} alt={props.src} />
      <div>
        <div className={css.Name}>
          {props.name}
        </div>
        <div className={css.Messages}>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default Dialog;