import React from 'react';
import { Link } from 'react-router-dom';

import { registerCommuter } from '../actions/ApiClient';
import { navigateToScreen } from '../App';

class Signup extends React.Component {
  state = {
    signupData: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    },
    errorMessage: ''
  };

  onInputChange = key => {
    return e => {
      const value = e.target.value;
      const signupDataCopy = Object.assign({}, this.state.signupData);
      signupDataCopy[key] = value;
      this.setState({
        signupData: signupDataCopy
      });
    };
  };

  onSignupClick = () => {
    registerCommuter(this.state.signupData)
      .then(response => {
        if (response.error) {
          this.setState({
            errorMessage: response.error.message
          });
        } else {
          navigateToScreen('/login');
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  };

  render() {
    const state = this.state;
    return (
      <>
        <div className="ui basic segment">
          <div className="ui two column stackable grid">
            <div className="center-aligned column">
              <h1 className="ui headers">Register with App</h1>
              <div className="ui form">
                <div className="field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    onChange={this.onInputChange('name')}
                    value={state.signupData.name}
                    placeholder="Enter your first name & last name"
                  />
                </div>
                <div className="field">
                  <label>Email ID</label>
                  <input
                    type="email"
                    onChange={this.onInputChange('email')}
                    value={state.signupData.email}
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="field">
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    onChange={this.onInputChange('mobile')}
                    value={state.signupData.mobile}
                    placeholder="Enter your 10 digits mobile number"
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={this.onInputChange('password')}
                    value={state.signupData.password}
                    placeholder="Set your password"
                  />
                </div>
                <div className="field">
                  <label>Re-enter Password</label>
                  <input
                    type="password"
                    onChange={this.onInputChange('confirmPassword')}
                    value={state.signupData.confirmPassword}
                    placeholder="Re-enter your password"
                  />
                </div>
                <button
                  className="ui primary button"
                  onClick={this.onSignupClick}
                >
                  Register
                </button>
                {state.errorMessage && (
                  <p className="error">{state.errorMessage}</p>
                )}
                <p>
                  Already have an account?&nbsp;
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
