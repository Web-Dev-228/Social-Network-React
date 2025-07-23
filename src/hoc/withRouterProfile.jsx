import { useParams } from 'react-router-dom'

let withRouterProfile = (ProfileContainer) => {
    return (props) => {
        const match = { params: useParams() };
        return <ProfileContainer {...props} match={match} />
    }
}

export default withRouterProfile;