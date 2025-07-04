import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import authReducer from './reducers/authReducer';
import navbarReducer from './reducers/navbarReducer';
import usersReducer from './reducers/usersReducer';


let reducers = combineReducers({
    auth: authReducer,
    navbar: navbarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
});


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;