import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <img src={props.state.iconSocialNetwork} alt='iconSocialNetwork' />
        </header>
    )
}

export default Header;