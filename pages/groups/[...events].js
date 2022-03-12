import EventItemCardComponent from "../../components/events/event-item-card-component";

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

export default function GroupEventsPage() {
  return (
    <>
      {EVENTS.map((event) => (
        <EventItemCardComponent key={event.id} event={event} />
      ))}
    </>
  );
}
