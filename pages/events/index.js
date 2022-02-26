import { useState, useEffect } from "react";
import EventItemComponent from "../../components/events/event-item-component";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <div>
      <h1>All Events Page</h1>
      {events.map((event) => (
        <EventItemComponent key={event._id} event={event} />
      ))}
    </div>
  );
}
