import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEvents = props.events.map((event, i) => {
    return (
      <div key={i} className="timeline">
        <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        />
      </div>
    );

  });
  return(
    <div>{timelineEvents}</div>
  );
  
}

export default Timeline;