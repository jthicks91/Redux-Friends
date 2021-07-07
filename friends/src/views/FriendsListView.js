import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";

import { fetchFriends, deleteFriends } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  deleteFriend = id => {
    this.setState({ deletingFriendId: id });
    this.props.deleteFriends(id);
  };

  render() {
    if (this.props.fetchingFriends) return <h1>Loading!... </h1>;
    return (
      <div className="friends">
        <h2>Friends </h2>
        {this.props.friends.map(friend => (
          <div className="friend-card">
            <i
              class="fas fa-times"
              onClick={() => this.deleteFriend(friend.id)}
            />
            <h4>{friend.name}</h4>
            <p>{friend.email}</p>
            {this.props.deletingFriend &&
              this.state.deletingFriendId === friend.id && (
                <p>Deleting Friend </p>
              )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ deletingFriend, friends, fetchingFriends }) => ({
  deletingFriend,
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchFriends, deleteFriends }
  )(FriendsList)
);
