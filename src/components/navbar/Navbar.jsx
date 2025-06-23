import s from './Navbar.module.css'
import Sidebar from './sidebar/Sidebar'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={s.navbar}>
            <div>
                <div className={s.item}>
                    <img src={props.state.navbar.imgProfile} alt='imgProfile' />
                    <NavLink to='Profile' className={navData => navData.isActive ? s.active : s.navbar_string}> Profile </NavLink>
                </div>
                <div className={s.item}>
                    <img src={props.state.navbar.imgNews} alt='imgNews' />
                    <NavLink to='News' className={navData => navData.isActive ? s.active : s.navbar_string}> News </NavLink>
                </div>
                <div className={s.item}>
                    <img src={props.state.navbar.imgMessages} alt='imgMessages' />
                    <NavLink to='Messages' className={navData => navData.isActive ? s.active : s.navbar_string}> Messages </NavLink>
                </div>
                <div className={s.item}>
                    <img src={props.state.navbar.imgMusic} alt='imgMusic' />
                    <NavLink to='Music' className={navData => navData.isActive ? s.active : s.navbar_string}> Music </NavLink>
                </div>
                <div className={s.item}>
                    <img src={props.state.navbar.imgFriends} alt='imgFriends' />
                    <NavLink to='Friends' className={navData => navData.isActive ? s.active : s.navbar_string}> Friends </NavLink>
                </div>
                <div className={s.item} >
                    <img src={props.state.navbar.imgSettings} alt='imgSettings' />
                    <NavLink to='Settings' className={navData => navData.isActive ? s.active : s.navbar_string}> Settings </NavLink>
                </div>
                <Sidebar state={props.state} />
            </div>
        </nav>
    )
}

export default Navbar;