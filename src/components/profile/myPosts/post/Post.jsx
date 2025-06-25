import css from './Post.module.css'

function Post(props) {
    return (
        <div className={css.Post}>
            <div>
                <div className={css.Avatar}>
                    <img src={props.src} alt="Аватар пользователя" />
                    <div className={css.Name}>
                        {props.name}
                    </div>
                </div>
                <div className={css.Message}>
                    {props.message}
                </div>
                <div>
                    <span className={css.like}>
                        {props.likesCount} {props.likesCount === 1 ? 'like' : 'likes'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;