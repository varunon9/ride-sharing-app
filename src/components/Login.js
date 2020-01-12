import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { loginCommuter } from '../actions/ApiClient';
import customLocalStorage from '../utils/customLocalStorage';
import { navigateToScreen } from '../App';

const Login = function(props) {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onInputChange = key => {
    return e => {
      const value = e.target.value;
      const loginDataCopy = Object.assign({}, loginData);
      loginDataCopy[key] = value;
      setLoginData(loginDataCopy);
    };
  };

  const onLoginClick = () => {
    loginCommuter(loginData)
      .then(response => {
        if (response && response.data) {
          customLocalStorage.setItem('user', response.data.data);

          navigateToScreen('/search');
        }
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <div className="ui basic segment">
        <div className="ui two column stackable grid">
          <div className="center-aligned column">
            <h1 className="ui headers">Login to App</h1>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  onChange={onInputChange('username')}
                  value={loginData.username}
                  placeholder="10-digits mobile number or email ID"
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  onChange={onInputChange('password')}
                  value={loginData.password}
                />
              </div>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
              <button className="ui primary button" onClick={onLoginClick}>
                Login
              </button>
              {errorMessage && <p className="error">{errorMessage}</p>}
              <p>
                Don't have an account?&nbsp;
                <Link to="/signup">Register Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
