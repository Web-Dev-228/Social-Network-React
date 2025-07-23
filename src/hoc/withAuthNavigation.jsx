import { Component } from 'react'
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

function mapStateToPropsForNavigation(state) {
    return {
        isAuth: state.auth.isAuth
    }
}

let withAuthNavigation = (Componenta) => {
    class NavigationComponent extends Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />;
            return <Componenta {...this.props} />
        }
    }

    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigation)(NavigationComponent)

    return ConnectedAuthNavigateComponent
}

export default withAuthNavigation;