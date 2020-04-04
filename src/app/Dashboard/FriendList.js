import React from "react";
import PropTypes from "prop-types";
import { getFriendList } from "./actions/friendlistActionTypes.js";
import { connect } from "react-redux";
import "./FriendList.scss";

class FriendList extends React.Component {
  componentWillMount() {
    this.setState({ ...this.state, friendList: [] });
    this.props.getFriendList();
  }

  _renderFriendList() {
    const friends = this.props.friendList;
    return friends.map(friend => <Friend friend={friend} />);
  }

  render() {
    return (
      <div className="friend-list-container">
        <FriendListTag />
        <div className="friend-list">{this._renderFriendList()}</div>
      </div>
    );
  }
}

const Friend = function({ friend }) {
  return (
    <div className="friend" id={friend.username}>
      {friend.name}
    </div>
  );
};

const FriendListTag = function() {
  return (
    <div className="friends-heading">
      <h1> Friends</h1>
    </div>
  );
};

const mapStateToProps = state => ({ ...state.friendList });
export default connect(mapStateToProps, { getFriendList })(FriendList);
