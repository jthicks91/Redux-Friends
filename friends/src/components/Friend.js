import React from "react";

const Friend = props => {
  return (
    <div className="friend-unit">
      <h2>{props.friend.name}</h2>
      <li>{props.friend.age}</li>
      <li>{props.friend.email}</li>
    </div>
  );
};

export default Friend;
