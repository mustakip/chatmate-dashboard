import React from 'react';
import './Signup.scss';
import axios from 'axios'

const initialState = {
  signupForm: {
    name: "",
    username: "",
    password: ""
  },
  message: ""
};

class Signup extends React.Component {
  componentWillMount() {
    this.setState(initialState);
  }

  _updateSignupData = (event) => {
    const key = event.target.name;
    this.state.signupForm[key] = event.target.value;
  };

  _signup = () => {
    const {signupForm} = this.state;
    axios.post("/signup", signupForm)
      .then(({data}) => {
        if (!data.signupSuccessful) {
          this.setState({...this.state, message: data.error});
          return;
        }
        this.setState({...this.state, message: "Signup successful..."})
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
}


export default Signup;