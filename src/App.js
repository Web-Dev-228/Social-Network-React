import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import MessagesContainer from './components/messages/MessagesContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import UsersContainer from './components/users/UsersContainer'
import Settings from './components/settings/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react'
import { connect } from 'react-redux'
import { inicializedApp } from './redux/reducers/appReducer'
import Preloader from './common/Preloader/Preloader';


class App extends Component {

  componentDidMount() {
    this.props.inicializedApp()
  }

  render() {
    if (!this.props.inicialized) {
      return < Preloader />
    } return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar state={this.props.state.navbar} />
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path='/music/' element={<Music />} />
            <Route path='/users/' element={<UsersContainer />} />
            <Route path='/settings/' element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    inicialized: state.app.inicialized
  }
}

export default connect(mapStateToProps, { inicializedApp })(App)


/* <Routes>
  <Route path='dialogs/*' element={<DialogsContainer />} />
  <Route path='profile/' element={<Profile />} />
  <Route path='feed/' element={<NewsFeed />} />
  <Route path='music/' element={<Music />} />
  <Route path='settings/' element={<Settings />} />
  <Route path='users/' element={<UsersContainer />} />
</Routes> */