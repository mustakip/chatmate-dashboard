import React from 'react';
import PropTypes from "prop-types";


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
  }


  render() {
    return (
      <div onClick={this._sendOnLoginPage}>
        Hello
      </div>
    )
  }
}

export default Dashboard