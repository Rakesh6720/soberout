import { useRef } from "react";
import classes from "./event-detail-card-component.module.css";
export default function EventDetailCardComponent({ event }) {
  return (
    <>
      <div className={classes.details}>
        <h2>Details</h2>
        <div dangerouslySetInnerHTML={{ __html: `${event.details}` }} />
      </div>
    </>
  );
}
