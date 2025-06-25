import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import authReducer from './reducers/authReducer';
import navbarReducer from './reducers/navbarReducer';
import friendsReducer from './reducers/friendsReducer';


let reducers = combineReducers({
    auth: authReducer,
    navbar: navbarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;