import EventItemCardComponent from "../../components/events/event-item-card-component";
import { MongoClient, ObjectId } from "mongodb";
import GroupDetailHeaderComponent from "../../components/groups/group-detail-header-component";
import GroupDetailNavComponent from "../../components/groups/group-detail-nav-component";

export default function GroupEventsPage({ events, group }) {
  return (
    <>
      <GroupDetailHeaderComponent group={group} />
      <GroupDetailNavComponent group={group} />
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

  const group_result = await db
    .collection("groups")
    .find({ _id: ObjectId(groupId) })
    .toArray();

  const group = JSON.parse(JSON.stringify(group_result));
  console.log(group);

  return {
    props: { events: events, group: group },
  };
}
