import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader'


function ProfileInfo(props) {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <div key={props.userProfile.userId} style={{ backgroundImage: `url(${props.userProfile.photos.large})` }} className={s.profileUserBackground} >
                <div className={s.profileInfo}>
                    <img src={props.userProfile.photos.small} alt={'userAvatar'} />
                    <div className={s.profileInfo_string}>
                        <div> {props.userProfile.aboutMe === null ? null : `Status: ${props.userProfile.aboutMe}`}</div>
                        {props.userProfile.lookingForAJob === true ? `Looking for a job: ${props.userProfile.lookingForAJobDescription}` : null}
                        <div className={s.Contacts}>
                            {props.userProfile.contacts === null ? null :  `Contacts: ${[
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