import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInformation/ProfileInfo';
import Preloader from '../../common/Preloader/Preloader'


function Profile(props) {
    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}
                userInfo={props.userInfo}
                userStatus={props.userStatus}
                registeredUserId={props.userId} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;