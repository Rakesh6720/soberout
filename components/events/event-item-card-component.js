import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./event-item-card-component.module.css";
export default function EventItemCardComponent({ event }) {
  const readableDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <h4>{event ? readableDate : "loading"}</h4>
            <h2>{event.title}</h2>
            <h4>{event.description}</h4>
          </div>
          <div>
            <Image
              className={classes.image}
              src={event.img ? event.img : "/images/tech.jpg"}
              alt={event.description}
              width="150"
              height="100"
            />
          </div>
        </div>
        <div id="attendees">
          <p>{event.attendees.length} attendees</p>
        </div>
      </div>
    </>
  );
}
