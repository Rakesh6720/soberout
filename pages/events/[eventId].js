import Link from "next/link";
import EventDetailComponent from "../../components/events/event-detail-component";
import EventDetailHeaderComponent from "../../components/events/event-detail-header-component";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { useEffect, useState } from "react";
import EventDetailCardComponent from "../../components/events/event-detail-card-component";
import CommentList from "../../components/input/comment-list";
import NewComment from "../../components/input/new-comment";
import Comments from "../../components/input/comments";
import { MongoClient, ObjectId } from "mongodb";

export default function EventDetailPage(props) {
  const event = props.event;
  console.log("from event detail page: ", event);
  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {event.map((item) => (
        <div key={item._id}>
          <EventDetailHeaderComponent event={item} />
          <EventDetailCardComponent event={item} />
          <Comments eventId={item._id} />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const eventId = context.params.eventId;
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const response = await db
    .collection("events")
    .find({ _id: ObjectId(eventId) })
    .toArray();
  const selectedEvent = JSON.parse(JSON.stringify(response));
  console.log("server side props from eventId: ", selectedEvent);

  return {
    props: { event: selectedEvent },
  };
}
