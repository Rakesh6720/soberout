import EventItemComponent from "../components/events/event-item-component";
import { useState, useEffect } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <div>
      <h1>Main Home Page</h1>
      {events.map((event) => (
        <EventItemComponent key={event._id} event={event} />
      ))}
    </div>
  );
}
