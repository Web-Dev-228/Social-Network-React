import profileReducer, {actions} from './profileReducer';
import React from 'react';

let state = {
    userProfile: null,
    userInfo: { id: 1, name: 'Andrew', description: '+ description', userAvatar: Avatar, userBackground: Background },
    posts: [
        { id: 1, name: 'Andrew', message: 'Hi, i`m very good!', likesCount: 1, src: Andrew },
        { id: 2, name: 'Diana', message: 'Hi, how are you? I registered for the first time in this social network and I am looking for friends, and I would be very happy if it was you', likesCount: 12, src: Diana },
        { id: 3, name: 'Andrew', message: 'It`s my first post!', likesCount: 20, src: Andrew },
    ],
    status: '',
    updateStatus: null
};

it('length of messages should increase', () => {
    // test data
    let action = actions.addPost('pelmeshki')

    // action
    let newState = profileReducer(state, action)

    // expectacion
    expect(newState.posts.length).toBe(4)
})