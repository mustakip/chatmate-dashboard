import React from 'react';
import './Signup.scss';
import axios from 'axios'
import PropTypes from "prop-types";

const initialState = {
  signupForm: {
    name: "",
    username: "",
    password: ""
  },
  message: ""
};

const isNotEmpty = (name) => {
  return name && name !== "";
};

class Signup extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillMount() {
    this.setState(initialState);
  }

  _sendToLoginPage() {
    this.context.router.push({pathname: "/login"})
  }

  _updateSignupData = (event) => {
    const key = event.target.name;
    this.state.signupForm[key] = event.target.value;
  };

  _signup = () => {
    const {signupForm} = this.state;
    if (!this._isValidForm(signupForm)) {
      this.setState({...this.state, message: "Invalid Input. Plz try again"})
      return;
    }
    axios.post("/signup", signupForm)
      .then(({data}) => {
        if (!data.signupSuccessful) {
          this.setState({...this.state, message: data.error});
          return;
        }
        this.setState({...this.state, message: "Signup successful..."})
        this._sendToLoginPage();
      })

  };

  render() {
    return (<div className="signup-page">
      <div className="signup-form">
        <input onChange={this._updateSignupData} className="name-input input" name="name" placeholder="Name"/>
        <input onChange={this._updateSignupData} className="username-input input" name="username"
               placeholder="Username"/>
        <input onChange={this._updateSignupData} className="password-input input" name="password"
               placeholder="Password"/>
        <button onClick={this._signup} className="signup-button" type="submit">Signup</button>
      </div>
      <div className="message-box">
        {this.state.message}
      </div>
    </div>);
  }
  _isValidForm({name, username, password}) {
    return isNotEmpty(name) && isNotEmpty(username) && isNotEmpty(password)
  }
}


export default Signup;