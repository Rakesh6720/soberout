import EventItemCardComponent from "../../components/events/event-item-card-component";
<<<<<<< Updated upstream

const EVENTS = [
  {
    id: 1,
    title: "Founders Keepers",
    description: "Do the damng thing, Gina",
    date: "2022-03-22",
    img: "",
  },
  {
    id: 2,
    title: "The Douche Makers",
    description: "We make the douches that run the world",
    date: "2022-04-22",
    img: "",
  },
  {
    id: 3,
    title: "The Makers Mark",
    description: "Create with the creators of the town",
    date: "2022-05-15",
    img: "",
  },
];
=======
import { MongoClient, ObjectId } from "mongodb";
import GroupDetailHeaderComponent from "../../components/groups/group-detail-header-component";
import GroupDetailNavComponent from "../../components/groups/group-detail-nav-component";

export default function GroupEventsPage({ events, group }) {
  console.log(events);
  console.log(group);
>>>>>>> Stashed changes

export default function GroupEventsPage() {
  return (
    <>
<<<<<<< Updated upstream
      {EVENTS.map((event) => (
        <EventItemCardComponent key={event.id} event={event} />
=======
      <GroupDetailHeaderComponent group={group} />
      <GroupDetailNavComponent group={group} />
      {events.map((event) => (
        <EventItemCardComponent key={event._id} event={event} />
>>>>>>> Stashed changes
      ))}
    </>
  );
}
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
