import { useEffect } from "react";
import { getAllEvents } from "../../dummy-data";
import EventItemCardComponent from "../events/event-item-card-component";

export default function PastEventsComponent({ groupId }) {
  const allEvents = getAllEvents();
  const groupEvents = allEvents.filter((event) => event.groupId === groupId);

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
        {groupEvents.map((event) => (
          <EventItemCardComponent key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
