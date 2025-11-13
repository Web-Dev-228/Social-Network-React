import css from './ProfileInfo.module.css';
import userBaseAvatar from '../../../redux/images/profile/Avatar.png'
import userBaseBackground from '../../../redux/images/profile/UserBackground.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
// import { useState, useEffect } from 'react';

function ProfileInfo(props) {

    // const [photos, setPhotos] = useState(props.userProfile.photos)
    // useEffect(() => {
    //     console.log('props.userProfile.photos изменились:', props.userProfile.photos);
    //     setPhotos(props.userProfile.photos)
    // }, [props.userProfile.photos])

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
                        <img src={ props.userProfile.photos.small || userBaseAvatar} alt={'userAvatar'} />
                        {props.authorizedUserId === props.userProfile.userId &&
                            <input className={css.buttonEditPhoto} type={'file'} onChange={onChangePhoto} />
                        }
                    </div>
                    <div className={css.profileInfo_string}>
                        <div>
                            Name: {props.userProfile.fullName || 'Name'}
                        </div>
                        <ProfileStatusWithHooks status={props.status}
                            authorizedUserId={props.authorizedUserId}
                            currentUserId={props.userProfile.userId}
                            updateUserStatusThunk={props.updateUserStatusThunk}
                        />
                        <div> {props.userProfile.aboutMe === null ? null : `About me: ${props.userProfile.aboutMe}`}</div>
                        {props.userProfile.lookingForAJob === true ?
                         `Looking for a job: ${props.userProfile.lookingForAJobDescription}` : null}
                        <div className={css.Contacts}>
                            {props.userProfile?.contacts === null ? null : Object.values(props.userProfile.contacts)
                                .filter(contact => contact && typeof contact === 'string' && contact.trim().length > 0)
                                .length > 0 ? `Contacts: ${Object.values(props.userProfile.contacts)
                                    .filter(contact => contact && typeof contact === 'string' && contact.trim().length > 0)
                                    .join(', ')}` : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;