import './App.css';
import React from 'react'
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { inicializedApp } from './redux/reducers/appReducer'
import Preloader from './common/Preloader/Preloader';

const Login = React.lazy(() => import('./components/login/Login'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));


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
            <Route path="/profile/:userId?" element={
              <Suspense fallback="loading...">
                <ProfileContainer />
              </Suspense>} />
            <Route path="/login" element={
              <Suspense fallback="loading...">
                <Login />
              </Suspense>} />
            <Route path="/news" element={<News />} />
            <Route path="/messages/*" element={
              <Suspense fallback="loading...">
                <MessagesContainer />
              </Suspense>} />
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