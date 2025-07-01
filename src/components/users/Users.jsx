import css from './Users.module.css'
import writeMessage from '../../redux/images/friends/writeMessage.png'
import { NavLink } from 'react-router-dom';
import Avatar from '../../redux/images/profile/Avatar.png';
import { usersAPI } from '../../API/usersAPI'

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={css.Users} >
            <div>
                {props.users.map(user =>
                    <div className={css.UserItems}>
                        {console.log(user)}
                        <div className={css.UserAvatar}>
                            <NavLink to={`../Profile/` + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : Avatar} alt='UserAvatar' />
                            </NavLink>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress?.some(id => id === user.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, user.id)
                                        usersAPI.deleteUsers(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                                props.toggleFollowingProgress(false, user.id)
                                            })
                                    }} className={css.followed}>Follow</button>
                                    : <button disabled={props.followingInProgress?.some(id => id === user.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, user.id)
                                        usersAPI.postUsers(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                                props.toggleFollowingProgress(false, user.id)
                                            })
                                    }} className={css.followed}>Unfollow</button>}
                            </div>
                        </div>
                        <div className={css.UserInformationItem}>
                            <div className={css.Name}>
                                {user.name}
                            </div>
                            <div className={css.status}>
                                {user.status}
                            </div>
                            <div className={css.writeMessage}>
                                <img src={writeMessage} alt='writeMessage' className={css.writeMessageImg} />
                                <NavLink className={css.writeMessageText}>
                                    Написать сообщение
                                </NavLink>
                            </div>
                            <div className={css.location}>
                                {/* {u.location.city}, {u.location.country} */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={css.pagesNumber}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? css.active : css.notActive} onClick={(e) => { props.onPageChanged(p) }}> {p}</span>
                })}
            </div>
        </div>
    )
}

export default Users;