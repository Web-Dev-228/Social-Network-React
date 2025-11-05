import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from 'redux-form'
import { thunk } from 'redux-thunk';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import authReducer from './reducers/authReducer';
import navbarReducer from './reducers/navbarReducer';
import usersReducer from './reducers/usersReducer';
import appReducer from './reducers/appReducer'


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    navbar: navbarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

window.store = store;

export default store;