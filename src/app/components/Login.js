import React from 'react';
import PropTypes from "prop-types";
import '../style/Dashboard.css';
import {connect} from 'react-redux'
import updateUsername from '../actions/userDetailsActions';


class Login extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };


  _sendOnLoginPage = () => {
    const username = this.props.location.query.username;
    let path = {pathname: ''};
    if (username) {
      this.props.updateUsername(username);
      fetch('/login?username=' + username);
      path.pathname = '/chats';
    }
    console.log(this.context);
    this.context.router.push(
      {
        ...path,
        query: {
          username: username
        }
      })
  };

  _updateUsername = (event) => {
    const username = event.target.value;
    this.context.router.push({
      query: {
        username: username
      }
    })

  };


  render() {
    return (
      <div className='login-form'>
        <input onChange={this._updateUsername} type='text' className='username-input-box' id='username-input'>Enter Username</input>
        <button onClick={this._sendOnLoginPage} className='login-button'>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {username: state}
};

export default connect(mapStateToProps, {
  updateUsername
})(Login);

export {Login};


