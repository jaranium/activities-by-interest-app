import React from 'react';

const Survey = props => {
return (
    
    <form>

        <h1>Tell us about yourself </h1>
        <br /><br />
        <label>
            What's your name?:
          <input
                name="name"
                type="text"
                onChange={this.handleInputChange} />
        </label>
        <br /><br /><br />
        <label>
            Create a username:
<input
                name="username"
                type="text"
                onChange={this.handleInputChange} />
        </label>
        <br />
        <br /><br />
        <h2>Choose three interests:</h2>
        <label>
            Food & Drink:
<input
                name="foodAndDrink"
                type="checkbox"
                onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
            Arts:
<input
                name="Arts"
                type="checkbox"
                onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
            Music:
<input
                name="Music"
                type="checkbox"
                onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Health & Wellness:
<input
                name="Music"
                type="checkbox"
                onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
            Networking:
<input
                name="networking"
                type="checkbox"
                onChange={this.handleInputChange} />
        </label >
        <br />
        <label>
            Charity & Causes:
<input
                name="charityAndCauses"
                type="checkbox"
                onChange={this.handleInputChange} />
        </label >
        <br />
        <br /><input type="submit" value="Submit" />
    </form >
)
}

export default Survey;