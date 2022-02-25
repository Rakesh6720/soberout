import classes from "./event-detail-header-component.module.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../dummy-data";

export default function EventDetailHeaderComponent({ event }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const host = getUserById(event.hostId);
    console.log(host);
    setUser(host);
  }, []);

  if (!user) {
    return <p>Not Found</p>;
  }

  return (
    <div className={classes.header}>
      <h5>{event.date}</h5>
      <h1>{event.title}</h1>
      <div className={classes.host}>
        <div className={classes.hostLogo} />
        <div className={classes.hostInfo}>
          <p>Hosted by</p>
          {user ? (
            <p className={classes.hostName}>
              {user[0].firstName} {user[0].lastName}
            </p>
          ) : (
            <p>no user on record</p>
          )}
        </div>
      </div>
    </div>
  );
}
