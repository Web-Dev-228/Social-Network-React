import css from './MyPosts.module.css'
import Post from './post/Post';
import NewPostReduxForm from './newPostForm/newPostForm'


const MyPosts = (props) => {

    function addPost(formData) {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={css.MyPosts}>
            <div className={css.WordMyPosts}>
                My posts
            </div>
            <NewPostReduxForm onSubmit={addPost} />
            <div>
                {props.posts.map(item =>
                    <Post
                        key={item.id}
                        name={item.name}
                        message={item.message}
                        likesCount={item.likesCount}
                        src={item.src}
                    />
                )}
            </div>
        </div>
    )
}

export default MyPosts;