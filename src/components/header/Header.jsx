import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import iconSocialNetwork from '../../redux/images/header/iconSocialNetwork.png'
import userBaseAvatar from '../../redux/images/profile/Avatar.png'

function Header(props) {
    return (
        <header className={css.header}>
                <img src={iconSocialNetwork} alt='iconSocialNetwork' className={css.iconSocialNetwork} />
                <div className={css.SocialNetworkName}>Letter</div>
            <div className={css.LoginBlock}>
                {props.isAuth ?
                    <div name='userInfoBlock'>
                        <img src={props.userPhoto || userBaseAvatar} alt='userPhoto' />
                        <div>{props.userName || 'name'}</div>
                    </div> :
                    <NavLink to={'/login'} className={css.LoginLink}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;