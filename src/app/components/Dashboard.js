import React from 'react';
import PropTypes from "prop-types";
import '../style/Dashboard.css';


class Dashboard extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };


  _sendOnLoginPage = () => {
    const username = this.props.location.query.username;
    let path = {pathname: ''};
    if (username) {
      path.pathname = '/login';
    }
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
    console.log(username);
    this.context.router.push({
      query: {
        username: username
      }
    })

  }


  render() {
    return (
      <div className='login-form'>
        <input onChange={this._updateUsername} type='text' className='username-input-box' id='username-input'></input>
        <button onClick={this._sendOnLoginPage} className='login-button'>Login</button>
      </div>
    )
  }
}

export default Dashboard