import css from './ProfileInfoForms.module.css'
import { useState } from 'react'
import ProfileInfoWithoutStatusReduxForm from './ProfileInfoForm'

const ProfileInfoWithoutStatus = (props) => {
    let [editMode, setEditMode] = useState(false)

    let activateEditMode = () => {
        props.authorizedUserId === props.currentUserId ?
            setEditMode(true)
            : setEditMode(false)
    }

    function updateProfileInfo(values) {
        let lookingForAJob = values.lookingForAJob === undefined ?
            props.userProfile.lookingForAJob : values.lookingForAJob

        let formData = {
            fullName: values.fullName || props.userProfile.fullName,
            aboutMe: values.aboutMe || props.userProfile.aboutMe,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription || props.userProfile.lookingForAJobDescription,
            contacts: {
                facebook: values.facebook || props.userProfile.contacts.facebook,
                website: values.website || props.userProfile.contacts.website,
                vk: values.vk || props.userProfile.contacts.vk,
                twitter: values.twitter || props.userProfile.contacts.twitter,
                instagram: values.instagram || props.userProfile.contacts.instagram,
                youtube: values.youtube || props.userProfile.contacts.youtube,
                github: values.github || props.userProfile.contacts.github,
                mainLink: values.mainLink || props.userProfile.contacts.mainLink
            }
        }
        console.log(formData)

        props.updateProfileInfoThunk(formData)
            .then(() => {
                setEditMode(false)
            })
            .catch(error => {
                // выловили ошибку из UI сюда
            });
    }

    return (
        <div>
            {editMode && props.userProfile ?
                <ProfileInfoWithoutStatusReduxForm initialValues={props.userProfile}
                    userProfile={props.userProfile}
                    authorizedUserId={props.authorizedUserId} currentUserId={props.userProfile.userId}
                    setEditMode={setEditMode} onSubmit={updateProfileInfo} />
                :
                <span className={css.profileInfoWithoutStatus}>
                    <div>
                        Name: {props.userProfile.fullName || 'Name'}
                    </div>
                    <div> {props.userProfile.aboutMe ? `About me: ${props.userProfile.aboutMe}` : null}</div>
                    <div>
                        {props.userProfile.lookingForAJob ?
                            `Looking for a job: Yes` : `Looking for a job: No`}
                    </div>
                    <div>{props.userProfile.lookingForAJobDescription ?
                        `My professional skills: ${props.userProfile.lookingForAJobDescription}` : undefined}
                    </div>
                    <div className={css.Contacts}>
                        Contacts {Object
                            .keys(props.userProfile.contacts)
                            .filter(key => props.userProfile.contacts[key] && props.userProfile.contacts[key].trim() !== '')
                            .map(contact => {
                                return <div key={contact}>{contact}: {props.userProfile.contacts[contact]}</div>
                            })}
                    </div>
                    <button onClick={activateEditMode}>edit</button>
                </span>}
        </div>
    )
}

export default ProfileInfoWithoutStatus;