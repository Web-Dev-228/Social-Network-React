import { useNavigate } from 'react-router-dom';

let withNavigateToLogin = (ProfileContainer) => {
    return (props) => {
        const navigateToLogin = { navigate: useNavigate() };
        return <ProfileContainer {...props} navigateToLogin={navigateToLogin} />
    }
}

export default withNavigateToLogin;