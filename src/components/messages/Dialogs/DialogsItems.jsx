import { NavLink } from 'react-router-dom';
import css from './DialogsItems.module.css';


function DialogsItems(props) {

  return (
    <div className={css.Dialog}>
      <img src={props.src} alt={props.src} />
      <div>
        <NavLink to={`/Messages/Dialog` + props.id} className={css.Name}>{props.name}</NavLink>
        <div className={css.Messages}>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default DialogsItems;