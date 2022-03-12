import EventItemCardComponent from "../../components/events/event-item-card-component";
import { MongoClient, ObjectId } from "mongodb";

export default function GroupEventsPage({ events }) {
  console.log(events);

  return (
    <>
      {events.map((event) => (
        <EventItemCardComponent key={event._id} event={event} />
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const [groupId, slug] = context.query.events;
  console.log(groupId);

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const results = await db
    .collection("events")
    .find({ groupId: ObjectId(groupId) })
    .toArray();

  const events = JSON.parse(JSON.stringify(results));
  console.log(events);

  return {
    props: { events },
  };
}
