import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInformation/ProfileInfo';
import Preloader from '../../common/Preloader/Preloader'


function Profile(props) {
debugger
    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} userInfo={props.userInfo} status={"samurai sila"} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;