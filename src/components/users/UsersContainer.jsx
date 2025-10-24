import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { follow, unfollow, getUsersAC } from '../../redux/reducers/usersReducer'
import {
    getUsersSelector, getTotalUsersCount, getPageSize,
    getCurrentPage, getIsFetching, getFollowingInProgress
} from '../../redux/selectors/usersSelector'

class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsersAC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersAC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

// function mapStateToProps(state) {
//     return {
//         users: state.usersPage.users,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

function mapStateToProps(state) {
    return {
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, getUsersAC })
)(UsersContainer) 