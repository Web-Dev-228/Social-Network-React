import { NavLink } from 'react-router-dom';
import s from './DialogsItems.module.css';


function DialogsItems(props) {

  return (
    <div className={s.Dialog}>
      <img src={props.src} alt={props.src} />
      <div>
        <NavLink to={`/Messages/Dialog` + props.id} className={s.Name}>{props.name}</NavLink>
        <div className={s.Messages}>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default DialogsItems;