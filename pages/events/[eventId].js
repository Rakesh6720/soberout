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

export default function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <EventDetailHeaderComponent event={event[0]} />
      <EventDetailCardComponent event={event[0]} />
      <Comments eventId={event[0].id} />
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
