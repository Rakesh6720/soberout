import { useEffect, useState } from "react";
import EventItemCardComponent from "../events/event-item-card-component";

export default function PastEventsComponent({ groupId }) {
  const [groupEvents, setGroupEvents] = useState([]);

  useEffect(() => {
    fetch("/api/groups/events/" + groupId)
      .then((response) => response.json())
      .then((data) => {
        console.log("past events data.events:", ...data.events);
        setGroupEvents(...data.events);
        console.log("past events component: ", groupEvents);
      });
  }, [groupId]);

  console.log(groupEvents);
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    fontFamily: "sans-serif",
  };

  return (
    <>
      <div style={divStyle}>
        <h2>Past Events</h2>

        {groupEvents && <EventItemCardComponent event={groupEvents} />}
      </div>
    </>
  );
}
