import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import header_navbarReducer from './reducers/header_navbarReducer';
import friendsReducer from './reducers/friendsReducer';


let reducers = combineReducers({
    header_navbar: header_navbarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers);

window.state = store.getState();

export default store;