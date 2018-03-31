import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import from child components...
import InterestDisplay from '.././components/InterestDisplay.jsx'
import PreSurvey from '.././components/PreSurvey.jsx'
import SearchBox from '.././components/SearchBox.jsx'

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      interests: [],
      interestsCaptured: false,
      city: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.profilePage = this.profilePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Your favorite flavor is: ' + this.state.value);
  event.preventDefault();
}


  handleInputChange(event) {
    const target = event.target;
    console.log(this.state)
    if (target.type === 'checkbox' && this.state.interests.length === 2) console.log('too many clicks')
    let value;
    let name;
    if (target.type === 'checkbox' && this.state.interests.length < 3) {
      value = [...this.state.interests, target.name];
      name = 'interests';
    }
    else {
      value = target.value;
      name = target.name;
    }
    this.setState({
      [name]: value
    });
  }

  profilePage() {

    if (this.state.interestsCaptured) {
      return (
        <div className="container">
          <div className="outerBox">
            <h2>Welcome Bob!</h2>
            <div>This is your profile page</div>
            <SearchBox handleChange={this.handleChange}  handleSubmit={this.handleSubmit}/>
            <InterestDisplay events={this.props.events} interests={this.props.interests}/>
          </div>
        </div>
      )
    }

    else {
      return (
        <div><PreSurvey /></div>
      )
    }
  }

  render() {
    return (
      <div>{this.profilePage()}</div>
    );
  }
}

export default ProfileContainer;