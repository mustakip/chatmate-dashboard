import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendMessage } from "./actions/dashboardActionTypes";
import FriendList from "./FriendList.js";
import openConnection from "../socket.js";
import "./Dashboard.scss";

class Dashboard extends React.Component {
  componentWillMount() {
    this.setState({
      ...this.state,
      message: "some message",
      chats: ["message1", "message2"]
    });
    openConnection();
  }

  render() {
    return (
      <div className="dashboard">
        <FriendList onClick={this.handleClick} />
        <div className="chat-box">this is chat-box </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.chats });
export default connect(mapStateToProps, { sendMessage })(Dashboard);
