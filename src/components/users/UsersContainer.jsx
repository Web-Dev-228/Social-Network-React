import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { followUnfollowThunk, getUsersThunk } from '../../redux/reducers/usersReducer'
import {
    getUsersSelector, getTotalUsersCount, getPageSize,
    getCurrentPage, getIsFetching, getFollowingInProgress
} from '../../redux/selectors/usersSelector'

class UsersContainer extends Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followUnfollowThunk={this.props.followUnfollowThunk}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

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
    connect(mapStateToProps, { followUnfollowThunk, getUsersThunk })
)(UsersContainer) 