import css from './ProfileInfo.module.css';
import userBaseAvatar from '../../../redux/images/profile/Avatar.png'
import userBaseBackground from '../../../redux/images/profile/UserBackground.jpg'
import ProfileStatus from './ProfileStatus'


function ProfileInfo(props) {
    return (
        <div>
            <div key={props.userProfile.userId} style={{ backgroundImage: `url(${props.userProfile.photos.large || userBaseBackground})` }} className={css.profileUserBackground} >
                <div className={css.profileInfo}>
                    <img src={props.userProfile.photos.small || userBaseAvatar} alt={'userAvatar'} />
                    <div className={css.profileInfo_string}>
                        <div>
                            Name: {props.userProfile.fullName || 'Name'}
                        </div>
                        <div> {props.userProfile.aboutMe === null ? null : `Status: ${props.userProfile.aboutMe}`}</div>
                        {props.userProfile.lookingForAJob === true ? `Looking for a job: ${props.userProfile.lookingForAJobDescription}` : null}
                        <div className={css.Contacts}>
                            {props.userProfile?.contacts === null ? null : Object.values(props.userProfile.contacts)
                                .filter(contact => contact && typeof contact === 'string' && contact.trim().length > 0)
                                .length > 0 ? `Contacts: ${Object.values(props.userProfile.contacts)
                                    .filter(contact => contact && typeof contact === 'string' && contact.trim().length > 0)
                                    .join(', ')}` : null}
                        </div>
                        <ProfileStatus status={props.status} 
                        registeredUserId={props.registeredUserId} 
                        currentUserId={props.userProfile.userId}
                        updateUserStatus={props.updateUserStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;