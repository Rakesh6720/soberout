import Link from "next/link";
import Image from "next/image";
import classes from "./event-item.module.css";
import { getEventById } from "../../dummy-data";
import { useEffect, useState } from "react";

export default function EventItemComponent({ event }) {
  const readableDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!event) {
    console.log("loading");
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link href={`/events/${event._id}`}>
        <a style={{ textDecoration: "none", color: "black" }}>
          <div className={classes.today}>
            <div className={classes.eventDetails}>
              <h4>{event ? readableDate : "loading"}</h4>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>

            <div className={classes.eventImage}>
              <Image
                className={classes.eventImage}
                src={event.img ? event.img : "/images/tech.jpg"}
                alt={event.description}
                width="150"
                height="100"
              />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
