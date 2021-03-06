import { MongoClient } from "mongodb";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import EventItemComponent from "../../components/events/event-item-component";
import GroupItemComponent from "../../components/groups/group-item-component";
import MemberGroupsComponent from "../../components/groups/member-groups-component";

import classes from "./index.module.css";

export default function MemberHomePage({ groups, events }) {
  const { data: session, status } = useSession();

  const [user, setUser] = useState("");

  useEffect(() => {
    if (session && status === "authenticated") {
      setUser(session.user);
    }
  }, [session, status]);

  if (!events) {
    return <p>Loading events...</p>;
  }

  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <>
      <header>
        <h1 className={classes.header}> meetup</h1>
      </header>
      <main className={classes.main}>
        {user.name ? (
          <h1>Welcome, {user.name}</h1>
        ) : (
          <h1>Welcome, {user.email}</h1>
        )}
        <div>
          <h2>Your groups</h2>
          <MemberGroupsComponent>
            {groups.map((event) => (
              <GroupItemComponent
                key={event._id}
                id={event._id}
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
                if (event.date.includes("2022-02-19"))
                  return <EventItemComponent key={event._id} event={event} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <h3>Sunday, February 20</h3>
          <hr />
          {events.map((event) => {
            if (event.date.includes("2022-02-20"))
              return <EventItemComponent key={event._id} event={event} />;
          })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();

  const results = await db.collection("groups").find().toArray();

  const groups = JSON.parse(JSON.stringify(results));

  const eventResults = await db.collection("events").find().toArray();

  const events = JSON.parse(JSON.stringify(eventResults));

  return {
    props: {
      groups: groups,
      events: events,
    },
  };
}
