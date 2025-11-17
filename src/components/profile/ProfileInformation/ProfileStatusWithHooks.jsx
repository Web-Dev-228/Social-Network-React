import { useState, useEffect } from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        props.authorizedUserId === props.currentUserId ?
            setEditMode(true)
            : setEditMode(false)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunk(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className='Status' >
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>Status: {status || 'no status'}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>}
        </div >
    )
}

export default ProfileStatusWithHooks;