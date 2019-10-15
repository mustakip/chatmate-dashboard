import React from 'react';
import './Login.scss';
import axios from 'axios'

const initialState = {
  loginForm: {
    username: "",
    password: ""
  },
  message: ""
};

const isNotEmpty = (name) => {
  return name !== "";
};

class Login extends React.Component {
  componentWillMount() {
    this.setState(initialState);
  }

  _updateLoginData = (event) => {
    const key = event.target.name;
    this.state.loginForm[key] = event.target.value;
  };

  _login = () => {
    const {loginForm} = this.state;
    if (!this._isValidForm(loginForm)) {
      this.setState({...this.state, message: "Invalid Credentials. Plz try again"})
      return;
    }
    axios.post("/login", loginForm)
      .then(({data}) => {
        if (!data.loginSucessful) {
          this.setState({...this.state, message: data.error});
          return;
        }
        this.setState({...this.state, message: "Login successful..."})
      })

  };

  render() {
    return (<div className="login-page">
      <div className="login-form">
        <input onChange={this._updateLoginData} className="username-input input" name="username"
               placeholder="Username"/>
        <input onChange={this._updateLoginData} className="password-input input" name="password"
               placeholder="Password"/>
        <button onClick={this._login} className="login-button" type="submit">Login</button>
      </div>
      <div className="message-box">
        {this.state.message}
      </div>
    </div>);
  }

  _isValidForm({username, password}) {
    return isNotEmpty(username) && isNotEmpty(password)
  }
}

export default Login;
