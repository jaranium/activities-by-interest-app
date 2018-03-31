import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import ProfileContainer from './ProfileContainer.jsx';
// import * as actions from "../actions/actions"
// import { bindActionCreators } from "redux";

const mapStateToProps = store => ({
  interests: store.profile.interests,
  events : store.profile.events
});

const mapDispatchToProps = dispatch => {

};

class MainContainer extends Component {
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
    console.log('in HS', this.state)
    e.preventDefault();
    let userInfo = {
      password: this.state.password,
      email: this.state.email
    };
    console.log('userinfo before fetch', userInfo)
    fetch('/api/signup', {
      method: "POST",
      body: JSON.stringify(userInfo),
      credentials: true,
      headers: { 'content-type': 'application/json' }
    }).then(res => res.json())
      .then(body => {
        console.log('body in second then', body)
        this.setState({ isUser: true });
      }).catch(err => {
        console.log('error signing up from Main Container')
      })
  }

  userPage = props => {
    console.log('props in userPage', props)
    if (this.state.signedUp) {
      return (
        <div className="container">
          <div className="outerBox">
            <ProfileContainer events={this.props.events} interests={this.props.interests}/>
          </div>
        </div>
      )
    }

    if (this.state.interestCaptured) {
      return (
        <div className="container">
          <div className="outerBox">
            <h1 id="header">Welcome {this.state.user}</h1>
          </div>
        </div>
      )
    }

    else {
      return (
        <div>
          <br/><br/><br/>
          {/* Login
          <form method="POST" action='/login'>
            <input name="username" type="text" placeholder="username"/>
            <input name="password" type="password" placeholder="password"/>
            <input type='submit' value="login" />
            <br/>
            <br/>
          </form> */}
          Sign up here! :)
            <form onSubmit={this.handleSubmit}>
            <br/><label>Email: </label>
            <input name="email" type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
            <br/>
            <br/><label>Password: </label>
            <input name="password" type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
            <input type='submit' value="signup" />
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.userPage()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);