import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import MessagesContainer from './components/messages/MessagesContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import FriendsContainer from './components/friends/FriendsContainer'
import Settings from './components/settings/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={props.state.navbar} />
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path='/music/' element={<Music />} />
          <Route path='/friends/' element={<FriendsContainer />} />
          <Route path='/settings/' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;


/* <Routes>
  <Route path='dialogs/*' element={<DialogsContainer />} />
  <Route path='profile/' element={<Profile />} />
  <Route path='feed/' element={<NewsFeed />} />
  <Route path='music/' element={<Music />} />
  <Route path='settings/' element={<Settings />} />
  <Route path='users/' element={<UsersContainer />} />
</Routes> */