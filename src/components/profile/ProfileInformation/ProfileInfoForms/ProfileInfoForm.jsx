import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import css from './ProfileInfoForms.module.css'

const ProfileInfoWithoutStatusForm = (props) => {
    const [checked, setChecked] = useState(props.userProfile.lookingForAJob);

    function handleChange() {
        setChecked(!checked);
    }
debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div key={Field.name} className={css.profileInfoWithoutStatus}>
                <div>
                    <label>Name: </label>
                    <Field name='fullName' component='input'
                    //placeholder={props.userProfile.fullName || 'Name'} 
                    />
                </div>
                <div>
                    <label>AboutMe: </label>
                    <Field name='aboutMe' component='input'
                    // placeholder={props.userProfile.aboutMe === null ? null : props.userProfile.aboutMe}
                    />
                </div>
                <div>
                    <label>Looking for a job </label>
                    <Field
                        name='lookingForAJob'
                        component='input'
                        type='checkbox'
                        checked={checked}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>My professional skills: </label>
                    <Field
                        name='lookingForAJobDescription'
                        component='input'
                    // placeholder={props.userProfile.lookingForAJobDescription ?
                    //     props.userProfile.lookingForAJobDescription : null}
                    />
                </div>
                <div className={css.Contacts}>
                    Contacts {Object
                        .keys(props.userProfile.contacts)
                        .map(contact => {
                            return (
                                <div>
                                    <label>{contact}: </label>
                                    <Field
                                        name={contact}
                                        component='input'
                                    // placeholder={props.userProfile.contacts[contact] || '...'}
                                    />
                                </div>)
                        })}
                </div>
            </div>
            <button>save</button>
        </form>
    )
}

const ProfileInfoWithoutStatusReduxForm = reduxForm({ form: 'Profile_infoForm', enableReinitialize: true })(ProfileInfoWithoutStatusForm)

export default ProfileInfoWithoutStatusReduxForm;