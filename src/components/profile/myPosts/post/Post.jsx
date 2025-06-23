import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.Post}>
            <div>
                <div className={s.Avatar}>
                    <img src={props.src} alt="Аватар пользователя" />
                    <div className={s.Name}>
                        {props.name}
                    </div>
                </div>
                <div className={s.Message}>
                    {props.message}
                </div>
                <div>
                    <span className={s.like}>
                        {props.likesCount} {props.likesCount === 1 ? 'like' : 'likes'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;