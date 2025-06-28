import css from './Navbar.module.css'
import Sidebar from './sidebar/Sidebar'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={css.navbar}>
            <div>
                <div className={css.item}>
                    <img src={props.state.navbar.imgProfile} alt='imgProfile' />
                    <NavLink to='Profile' className={navData => navData.isActive ? css.active : css.navbar_string}> Profile </NavLink>
                </div>
                <div className={css.item}>
                    <img src={props.state.navbar.imgNews} alt='imgNews' />
                    <NavLink to='News' className={navData => navData.isActive ? css.active : css.navbar_string}> News </NavLink>
                </div>
                <div className={css.item}>
                    <img src={props.state.navbar.imgMessages} alt='imgMessages' />
                    <NavLink to='Messages' className={navData => navData.isActive ? css.active : css.navbar_string}> Messages </NavLink>
                </div>
                <div className={css.item}>
                    <img src={props.state.navbar.imgMusic} alt='imgMusic' />
                    <NavLink to='Music' className={navData => navData.isActive ? css.active : css.navbar_string}> Music </NavLink>
                </div>
                <div className={css.item}>
                    <img src={props.state.navbar.imgFriends} alt='imgFriends' />
                    <NavLink to='Users' className={navData => navData.isActive ? css.active : css.navbar_string}> Friends </NavLink>
                </div>
                <div className={css.item} >
                    <img src={props.state.navbar.imgSettings} alt='imgSettings' />
                    <NavLink to='Settings' className={navData => navData.isActive ? css.active : css.navbar_string}> Settings </NavLink>
                </div>
                <Sidebar state={props.state} />
            </div>
        </nav>
    )
}

export default Navbar;