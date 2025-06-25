import css from './Sidebar.module.css'


function Sidebar(props) {
    return (
        <div>
            <div className={css.sidebarTitle}>Online</div>
            <div className={css.sidebar}>
                {props.state.friends.map(item => (
                    <div key={item.id} className={css.sidebarFriends}>
                        <img src={item.src} alt={item.src} />
                        <div>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;