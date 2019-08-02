import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import updateUsername from "../actions/userDetailsActions";

class Dashboard extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  render() {
    return (
      <div className='dashboard'>
        Welcome {this.props.username} ....
      </div>)
  }
}
const mapStateToProps = (store) => ({...store});
export default connect(mapStateToProps,{updateUsername})(Dashboard);

