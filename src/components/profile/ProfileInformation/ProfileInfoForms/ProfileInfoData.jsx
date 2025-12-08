import React from 'react'
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
        let fullName = values.fullName ? values.fullName : props.userProfile.fullName
        let aboutMe = values.aboutMe ? values.aboutMe : props.userProfile.aboutMe
        let lookingForAJobDescription = values.lookingForAJobDescription ?
            values.lookingForAJobDescription : props.userProfile.lookingForAJobDescription
        let lookingForAJob = values.lookingForAJob ?
            values.lookingForAJob : props.userProfile.lookingForAJob
        console.log(values)
        let formData = {
            fullName: fullName,
            aboutMe: aboutMe,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: lookingForAJobDescription,
            contacts: {
                facebook: values.facebook || null,
                website: values.website || null,
                vk: values.vk || null,
                twitter: values.twitter || null,
                instagram: values.instagram || null,
                youtube: values.youtube || null,
                github: values.github || null,
                mainLink: values.mainLink || null
            }
        }
        setEditMode(false)
        props.updateProfileInfoThunk(formData);
    }
    console.log(props.userProfile)

    return (
        <div>
            {editMode && props.userProfile ?
                <ProfileInfoWithoutStatusReduxFormMemo initialValues={props.userProfile}
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
                    <div>{`My professional skills: ${props.userProfile.lookingForAJobDescription}`}
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

const ProfileInfoWithoutStatusReduxFormMemo = React.memo(({
    initialValues,
    userProfile, authorizedUserId, currentUserId, setEditMode, onSubmit
}) => {
    return (
        <ProfileInfoWithoutStatusReduxForm initialValues={initialValues}
            userProfile={userProfile}
            authorizedUserId={authorizedUserId} currentUserId={currentUserId}
            setEditMode={setEditMode} onSubmit={onSubmit} />
    )
})

export default ProfileInfoWithoutStatus;