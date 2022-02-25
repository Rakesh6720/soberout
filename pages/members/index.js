import classes from "./index.module.css";
import Image from "next/image";
import EventItemComponent from "../../components/events/event-item-component";
import GroupItemComponent from "../../components/groups/group-item-component";
import MemberGroupsComponent from "../../components/groups/member-groups-component";
import { getAllEvents, getAllGroups } from "../../dummy-data";

export default function MemberHomePage() {
  const events = getAllEvents();
  const groups = getAllGroups();
  //const { id, date, title, description, img } = events;
  return (
    <>
      <header>
        <h1 className={classes.header}> meetup</h1>
      </header>
      <main className={classes.main}>
        <h1>Welcome, Rakesh</h1>
        {/* <div>
          <h2>Your next event</h2>
          <EventItemComponent
            date="SAT, FEB 19 @3:00 CST"
            title="Bowling"
            description="Fun times for Young(ish) Adults"
            src="/images/bowling.jpeg"
          />
        </div> */}
        <div>
          <h2>Your groups</h2>
          <MemberGroupsComponent>
            {groups.map((event) => (
              <GroupItemComponent
                key={event.id}
                id={event.id}
                date={event.date}
                title={event.title}
                description={event.description}
                img={event.img}
              />
            ))}
          </MemberGroupsComponent>
        </div>
        <div>
          <h2>Upcoming events</h2>
          <h3>Today</h3>
          <hr />
          <div className={classes.today}>
            <div className={classes.todayDetails}>
              <h5>Suggested</h5>
              {events.map((event) => {
                if (event.date.includes("SAT, FEB 19"))
                  return <EventItemComponent key={event.id} event={event} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <h3>Sunday, February 20</h3>
          <hr />
          {events.map((event) => {
            if (event.date.includes("SUN"))
              return <EventItemComponent key={event.id} event={event} />;
          })}
        </div>
      </main>
    </>
  );
}
