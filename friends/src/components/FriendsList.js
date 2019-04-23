import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";

const FriendsList = props => {
  if (!props.friends) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      {props.friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
