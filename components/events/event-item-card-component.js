import Image from "next/image";
import classes from "./event-item-card-component.module.css";
export default function EventItemCardComponent({ event }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <h4>{event ? event.date : "loading"}</h4>
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
          <p>12 attendees</p>
        </div>
      </div>
    </>
  );
}
