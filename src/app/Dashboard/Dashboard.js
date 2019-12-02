import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendMessage} from "../actionTypes";
import socket from "../socket";

class Dashboard extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillMount() {
    this.setState({message: ""});
    socket.on('getMessage', data => this.setState({...this.state, chats: data}))
    socket.on('connect',()=> {
      console.log("The connection has been established");
    })
  }

  _renderMessages() {
    const chats = this.props.chatData;
    console.log("is it rendering =>", chats);
    return chats && chats.map((chat,index) => (<div id={index}>{chat.message}</div>));
  }


  render() {
    return <div className='dashboard'>
      <div className="chat">
        {this._renderMessages()}
      </div>
      <input onChange={this._updateMessage} className="message-input input" name="message"
      />
      <input onClick={this.sendTheMessage} type='submit' value='Send'/>
    </div>;
  }

  _updateMessage = (event) => {
    const message = {message: event.target.value};
    this.setState({...this.state,message});
  };

  sendTheMessage = () => {
    socket.emit('sendMessage', this.state.message);
    console.log("in component", this.state.message);
    this.props.sendMessage(this.state.message);
    this.setState({message:""});
  }
}

const mapStateToProps = (state) => ({...state.chats});
export default connect(mapStateToProps, {sendMessage})(Dashboard);

