import EventItemComponent from "../components/events/event-item-component";
import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";

export default function Home({ events }) {
  return (
    <div>
      <h1>Main Home Page</h1>
      {events.map((event) => (
        <EventItemComponent key={event._id} event={event} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const response = await db.collection("events").find().toArray();

  const events = JSON.parse(JSON.stringify(response));

  return {
    props: {
      events: events,
    },
  };
}
