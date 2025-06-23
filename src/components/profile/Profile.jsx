import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInformation/ProfileInfo';


function Profile(props) {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;