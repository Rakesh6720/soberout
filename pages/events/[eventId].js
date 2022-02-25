import Link from "next/link";
import EventDetailComponent from "../../components/events/event-detail-component";
import EventDetailHeaderComponent from "../../components/events/event-detail-header-component";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { useEffect, useState } from "react";
import EventDetailCardComponent from "../../components/events/event-detail-card-component";

export default function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </nav>
      </header>
      <EventDetailHeaderComponent event={event[0]} />
      <EventDetailCardComponent event={event[0]} />
    </>
  );
}

export async function getServerSideProps(context) {
  const eventId = context.params.eventId;
  const selectedEvent = getEventById(eventId);
  console.log(selectedEvent);
  return {
    props: { event: selectedEvent },
  };
}
