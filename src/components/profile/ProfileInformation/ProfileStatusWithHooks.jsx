import { useState, useEffect } from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    debugger
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
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    return (
        <div className='Status' >
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div >
    )
}

export default ProfileStatusWithHooks;