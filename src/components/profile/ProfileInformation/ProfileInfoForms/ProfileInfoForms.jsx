import css from './ProfileInfoForms.module.css'
import { useState, useEffect } from 'react'

export const ProfileInfoWithoutStatus = (props) => {
    let [editMode, setEditMode] = useState(false)

    let activateEditMode = () => {
        props.authorizedUserId === props.currentUserId ?
            setEditMode(true)
            : setEditMode(false)
    }

    return (
        <div>
            {!editMode ?
                <span className={css.profileInfoWithoutStatus}>
                    <div>
                        Name: {props.userProfile.fullName || 'Name'}
                    </div>
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
                    <button onClick={activateEditMode}>edit</button>
                </span>
                : <ProfileInfoWithoutStatusForm userProfile={props.userProfile} authorizedUserId={props.authorizedUserId}
                    currentUserId={props.userProfile.userId} setEditMode={setEditMode} />}
        </div>
    )
}


const ProfileInfoWithoutStatusForm = () => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={css.profileInfoWithoutStatus}>
                <div>
                    Name: {props.userProfile.fullName || 'Name'}
                </div>
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
            <button onClick={() => { setEditMode(false); onSubmit() }}>save</button>
        </form>
    )
}