import s from './Friends.module.css'
import writeMessage from '../../redux/images/friends/writeMessage.png'
import { NavLink } from 'react-router-dom';
import Avatar from '../../redux/images/profile/Avatar.png';

function Friends(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.Users} >
            <div>
                {props.users.map(u =>
                    <div className={s.UserItems}>
                        <div className={s.UserAvatar}>
                            <NavLink to={`../Profile/` + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : Avatar} alt='UserAvatar' />
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }} className={s.followed}>Follow</button>
                                    : <button onClick={() => { props.follow(u.id) }} className={s.followed}>Unfollow</button>}
                            </div>
                        </div>
                        <div className={s.UserInformationItem}>
                            <div className={s.Name}>
                                {u.name}
                            </div>
                            <div className={s.status}>
                                {u.status}
                            </div>
                            <div className={s.writeMessage}>
                                <img src={writeMessage} alt='writeMessage' className={s.writeMessageImg} />
                                <NavLink className={s.writeMessageText}>
                                    Написать сообщение
                                </NavLink>
                            </div>
                            <div className={s.location}>
                                {/* {u.location.city}, {u.location.country} */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={s.pagesNumber}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.active : s.notActive} onClick={(e) => { props.onPageChanged(p) }}> {p}</span>
                })}
            </div>
        </div>
    )
}

export default Friends;