import React from 'react';
import EventDisplay from './EventDisplay.jsx'

const InterestDisplay = props => {
  let interests = [];
  for (let i = 0; i < props.interests.length; i++) {
    interests.push(
      <div className='InterestDisplay'>
      <h3>{props.interests[i]}</h3>
      <EventDisplay key={i} events={props.events} />
      </div>
    );
  }
  return (
    <div className="displayBox">
    <h2>Check out your 3 interests:</h2>      
      {interests}
    </div>
  );
};

export default InterestDisplay;