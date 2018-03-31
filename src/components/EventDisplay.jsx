import React from 'react';
import Event from './Event.jsx'

const EventDisplay = props => {
  let events = [];
  for (let i = 0; i < props.events.length; i++) {
    events.push(<Event key={i} eventItem={props.events[i]} addFav={props.addFav} />);
  }
  return (
    <div className="displayBox">
      <hr/><h2>Event Container</h2>
      {events}
    </div>
  );
};

export default EventDisplay;