import css from './ProfileInfo.module.css';
import userBaseAvatar from '../../../redux/images/profile/Avatar.png'
import userBaseBackground from '../../../redux/images/profile/UserBackground.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import { ProfileInfoWithoutStatus } from './ProfileInfoForms/ProfileInfoForms'

function ProfileInfo(props) {

    const onChangePhoto = (e) => {
        if (e.target.files.length) {
            props.updateUserPhotoThunk(e.target.files[0])
        }
    }

    return (
        <div>
            <div key={props.userProfile.userId} style={{ backgroundImage: `url(${props.userProfile.photos.large || userBaseBackground})` }} className={css.profileUserBackground} >
                <div className={css.profileInfo}>
                    <div className={css.profilePhoto}>
                        <img src={props.userProfile.photos.small || userBaseAvatar} alt={'userAvatar'} />
                        {props.authorizedUserId === props.userProfile.userId &&
                            <input className={css.buttonEditPhoto} type={'file'} onChange={onChangePhoto} />
                        }
                    </div>
                    <div className={css.profileInfoWithStatus}>
                        <ProfileStatusWithHooks status={props.status}
                            authorizedUserId={props.authorizedUserId}
                            currentUserId={props.userProfile.userId}
                            updateUserStatusThunk={props.updateUserStatusThunk}
                        />
                        <ProfileInfoWithoutStatus userProfile={props.userProfile} authorizedUserId={props.authorizedUserId}
                            currentUserId={props.userProfile.userId} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProfileInfo;