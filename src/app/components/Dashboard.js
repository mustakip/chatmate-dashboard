import React from 'react';
import PropTypes from "prop-types";
import '../style/Dashboard.css';


class Dashboard extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };


  _sendOnLoginPage = () => {
    this.context.router.push(
      {
        pathname: "/login"
      }
    )
  };


  render() {
    return (
      <div className='login-form' onClick={this._sendOnLoginPage}>
        <button className='login-button'>Login</button>
      </div>
    )
  }
}

export default Dashboard