import css from './Users.module.css'
import writeMessage from '../../redux/images/friends/writeMessage.png'
import { NavLink } from 'react-router-dom';
import Avatar from '../../redux/images/profile/Avatar.png';
import PagesNumberCreator from '../../common/PagesNumberCreator/PagesNumberCreator'

function Users(props) {
    return (
        <div className={css.Users} >
            <div>
                {props.users.map(user =>
                    <div key={user.id} className={css.UserItems}>
                        <div className={css.UserAvatar}>
                            <NavLink to={`../Profile/` + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : Avatar} alt='UserAvatar' />
                            </NavLink>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress?.some(id => id === user.id)} onClick={() => {
                                        props.followUnfollowThunk(user.id, false)
                                    }} className={css.followed}>Follow</button>
                                    : <button disabled={props.followingInProgress?.some(id => id === user.id)} onClick={() => {
                                        props.followUnfollowThunk(user.id, true)
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
            <PagesNumberCreator
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} portionSize={10} />
        </div>
    )
}

export default Users;