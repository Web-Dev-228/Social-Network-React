import { Component } from 'react'

class ProfileStatus extends Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.props.registeredUserId === this.props.currentUserId ?
            this.setState({
                editMode: true
            }) : this.setState({
                editMode: false
            })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        const userStatus = this.props.registeredUserId === this.props.currentUserId ?
            (this.props.userStatus === null ? 'Please enter your status' : this.props.userStatus)
            : this.props.userStatus

        return (
            <div className='Status'>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{userStatus}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} value={userStatus} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;