import s from './MyPosts.module.css'
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
        <div className={s.MyPosts}>
            <div className={s.WordMyPosts}>
                My posts
            </div>
            <div>
                <textarea placeholder='Напишите что-нибудь' onChange={onPostChange} value={props.newPostText} className={s.Textarea} />
                <button onClick={onAddPost} className={s.AddPost}>Add Post</button>
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