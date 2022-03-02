import classes from "./event-detail-header-component.module.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../dummy-data";

export default function EventDetailHeaderComponent({ event }) {
  const [user, setUser] = useState();

  const readableDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log("event detail header comopnent: ", event);

  useEffect(() => {
    fetch("/api/users/" + event.hostId)
      .then((response) => response.json())
      .then((data) => setUser(data.user));
  }, []);

  if (!user) {
    return <p>Not Found</p>;
  }

  return (
    <div className={classes.header}>
      <h5>{readableDate}</h5>
      <h1>{event.title}</h1>
      <div className={classes.host}>
        <div className={classes.hostLogo} />
        <div className={classes.hostInfo}>
          <p>Hosted by</p>
          {user ? (
            <p className={classes.hostName}>
              {user.firstName} {user.lastName}
            </p>
          ) : (
            <p>no user on record</p>
          )}
        </div>
      </div>
    </div>
  );
}
