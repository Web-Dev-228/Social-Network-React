import css from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader'
import userBaseAvatar from '../../../redux/images/profile/Avatar.png'
import userBaseBackground from '../../../redux/images/profile/UserBackground.jpg'


function ProfileInfo(props) {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <div key={props.userProfile.userId} style={{ backgroundImage: `url(${props.userProfile.photos.large || userBaseBackground})` }} className={css.profileUserBackground} >
                <div className={css.profileInfo}>
                    <img src={props.userProfile.photos.small || userBaseAvatar} alt={'userAvatar'} />
                    <div className={css.profileInfo_string}>
                        <div> {props.userProfile.aboutMe === null ? null : `Status: ${props.userProfile.aboutMe}`}</div>
                        {props.userProfile.lookingForAJob === true ? `Looking for a job: ${props.userProfile.lookingForAJobDescription}` : null}
                        <div className={css.Contacts}>
                            {props.userProfile.contacts === null ? null : `Contacts: ${[
                                props.userProfile.contacts.facebook,
                                props.userProfile.contacts.github,
                                props.userProfile.contacts.instagram,
                                props.userProfile.contacts.mainLink,
                                props.userProfile.contacts.twitter,
                                props.userProfile.contacts.vk,
                                props.userProfile.contacts.website,
                                props.userProfile.contacts.youtube
                            ].filter(Boolean).join(', ')}`}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;