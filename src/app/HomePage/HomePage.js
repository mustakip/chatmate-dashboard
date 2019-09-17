import React from 'react';
import './HomePage.scss';
import PropTypes from "prop-types";


class HomePage extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  _sendOnLoginPage = () => this.context.router.push({pathname: "/login"});
  _sendOnSignupPage = () => this.context.router.push({pathname: "/signup"});

  render() {
    return (
      <div className='home-page'>
        <div className="signup-login-options">
          <button onClick={this._sendOnLoginPage} className='login-button'>Login</button>
          <button onClick={this._sendOnSignupPage} className='signup-button'>Signup</button>
        </div>
      </div>
    )
  }
}

export default HomePage;