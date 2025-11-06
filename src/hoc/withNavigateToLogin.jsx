import { useNavigate } from 'react-router-dom';

let withNavigateToLogin = (Componenta) => {
    return (props) => {
        const navigateToLogin = { navigate: useNavigate() };
        return <Componenta {...props} navigateToLogin={navigateToLogin} />
    }
}

export default withNavigateToLogin;