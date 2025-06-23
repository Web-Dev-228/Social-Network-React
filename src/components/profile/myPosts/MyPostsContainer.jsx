import { connect } from 'react-redux';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer';


function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (value) => {
            dispatch(updateNewPostTextActionCreator(value))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;