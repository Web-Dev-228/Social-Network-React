import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import iconSocialNetwork from '../../redux/images/header/iconSocialNetwork.png'
import userBaseAvatar from '../../redux/images/profile/Avatar.png'


function Header(props) {
    return (
        <header className={css.header}>
            <img src={iconSocialNetwork} alt='iconSocialNetwork' className={css.iconSocialNetwork} />
            <div className={css.SocialNetworkName}>Letter</div>
            <div>
                {props.isAuth ?
                    <div className={css.LoginInfoBlock}>
                        <div>
                            <img src={props.userPhoto || userBaseAvatar} alt='userPhoto' />
                        </div>
                        <div>{props.userName || 'name'}</div>
                        <div className={css.LogOut}>
                            <button onClick={props.logOut}>Log out</button>
                        </div>
                    </div> :
                    <NavLink to={'/login'} className={css.LoginLink}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;