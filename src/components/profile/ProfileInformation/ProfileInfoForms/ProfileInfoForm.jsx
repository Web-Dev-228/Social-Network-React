import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../../../../common/FormsControls/FormsConrols'
import css from './ProfileInfoForms.module.css'


const Input = FormControl('input')

const ProfileInfoWithoutStatusForm = ({ handleSubmit, userProfile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div key={Field.name} className={css.profileInfoWithoutStatus}>
                <div>
                    <label>Name: </label>
                    <Field name='fullName' component={Input}
                        placeholder={userProfile.fullName || 'Name'}
                    />
                </div>
                <div>
                    <label>AboutMe: </label>
                    <Field name='aboutMe' component={Input}
                        placeholder={userProfile.aboutMe === null ? null : userProfile.aboutMe}
                    />
                </div>
                <div>
                    <label>Looking for a job </label>
                    <Field
                        name='lookingForAJob'
                        component='input'
                        type='checkbox'
                    />
                </div>
                <div>
                    <label>My professional skills: </label>
                    <Field
                        name='lookingForAJobDescription'
                        component={Input}
                        placeholder={userProfile.lookingForAJobDescription ?
                            userProfile.lookingForAJobDescription : null}
                    />
                </div>
                <div className={css.Contacts}>
                    Contacts {Object
                        .keys(userProfile.contacts)
                        .map(contact => {
                            return (
                                <div key={contact}>
                                    <label>{contact}: </label>
                                    <Field
                                        name={contact}
                                        component={Input}
                                        placeholder={userProfile.contacts[contact] || '...'}
                                    />
                                </div>)
                        })}
                </div>
            </div>
            <div className={css.IncorrectEmailOrPassword}>
                {error ? `Invalid url format: ` + error : undefined}
            </div>
            <button>save</button>
        </form>
    )
}

const ProfileInfoWithoutStatusReduxForm = reduxForm({ form: 'Profile_infoForm', enableReinitialize: true })(ProfileInfoWithoutStatusForm)

export default ProfileInfoWithoutStatusReduxForm;