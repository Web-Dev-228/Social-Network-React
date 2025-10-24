import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
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


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;