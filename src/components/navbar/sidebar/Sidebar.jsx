import s from './Sidebar.module.css'


function Sidebar(props) {
    return (
        <div>
            <div className={s.sidebarTitle}>Online</div>
            <div className={s.sidebar}>
                {props.state.friends.map(item => (
                    <div key={item.id} className={s.sidebarFriends}>
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