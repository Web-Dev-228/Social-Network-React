import { connect } from 'react-redux';
import MyPosts from './MyPosts'
import { addPost } from '../../../redux/reducers/profileReducer';


function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;