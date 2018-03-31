
//presentation component that renders a single box for each event
import React from 'react';

const Event = props => {
    console.log('props in event --->>>', props)
    return (
        <div className="eventBox">
            <h4> event :{props.eventItem.name} </h4>
            <button onClick={() => {
                props.addFav(props.eventItem)
            }}>Add to Favorites</button>
            <br/><br/><br/>
        </div>
    );
};

export default Event;