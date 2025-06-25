import Andrew from '../images/dialogs/Andrew.jpg';
import Viktor from '../images/dialogs/Viktor.jpg';
import Diana from '../images/dialogs/Diana.jpg';
import imgProfile from '../images/navbar/Profile.png';
import imgNews from '../images/navbar/News.png';
import imgMessages from '../images/navbar/Messages.png';
import imgMusic from '../images/navbar/Music.png';
import imgFriends from '../images/navbar/Friends.png'
import imgSettings from '../images/navbar/Settings.png';


let initialState = {
    navbar: { imgProfile: imgProfile, imgNews: imgNews, imgMessages: imgMessages, imgMusic: imgMusic, imgFriends: imgFriends, imgSettings: imgSettings },
    friends: [
        { id: 1, name: 'Andrew', src: Andrew },
        { id: 2, name: 'Viktor', src: Viktor },
        { id: 3, name: 'Diana', src: Diana },
    ]
};

function navbarReducer(state = initialState) {
    return state;
}


export default navbarReducer;