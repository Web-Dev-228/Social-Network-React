import css from './MyPosts.module.css'
import Post from './post/Post';


function MyPosts(props) {

    function onAddPost() {
        props.addPost();
    }

    // e. поступает от onChange, из-за 'on'
    function onPostChange(e) {
        props.updateNewPostText(e.target.value);
    }

    return (
        <div className={css.MyPosts}>
            <div className={css.WordMyPosts}>
                My posts
            </div>
            <div>
                <textarea placeholder='Напишите что-нибудь' onChange={onPostChange} value={props.newPostText} className={css.Textarea} />
                <button onClick={onAddPost} className={css.AddPost}>Add Post</button>
            </div>
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