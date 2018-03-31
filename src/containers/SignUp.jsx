import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import { withRouter } from 'react-router'


// import * as actions from "../actions/actions"
// import { bindActionCreators } from "redux";

const mapStateToProps = store => ({
  username: store.profile.username,
  email: store.profile.email,
  password: store.profile.password,
  interests: store.profile.interests
});

const mapDispatchToProps = dispatch => {

};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedUp: false,
      interestsCaptured: false,
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      password: this.state.password,
      email: this.state.email
    };
    console.log('userinfo before fetch', userInfo)
    fetch('/signup', {
      method: "POST",
      body: JSON.stringify(userInfo),
      credentials: true,
      headers: { 'content-type': 'application/json' }
    })
    // .then(res => res.json())
    //   .then(body => {
    //     console.log('body in second then', body)
    //     this.setState({ isUser: true });
    //   }).catch(err => {
    //     console.log('error signing up from Main Container')
    //   })
    console.log('RIGHT BEFORE HISTORYYY ---> ', this.props)  
    this.props.history.push('/survey');
  }

  publicPage = props => {
    if (!this.state.signedUp) {
      return (
        <div className="signupContainer">
          <br /><br /><h2>Sign up here! :)</h2>
            <form onSubmit={this.handleSubmit}>
            <br /><label>Email: </label>
            <input name="email" type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
            <br />
            <br /><label>Password: </label>
            <input name="password" type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
            <input type='submit' value="signup" />
          </form>
        </div>
      )
    }

    else {
      return (
        <div>
          <br /><br /><br />
          {/* Login
          <form method="POST" action='/login'>
            <input name="username" type="text" placeholder="username"/>
            <input name="password" type="password" placeholder="password"/>
            <input type='submit' value="login" />
            <br/>
            <br/>
          </form> */}

        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.publicPage()}
      </div>
    )
  }
}

const connectedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
const RoutedSignUp = withRouter(connectedSignUp);
export default RoutedSignUp;