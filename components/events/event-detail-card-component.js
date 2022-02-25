import classes from "./event-detail-card-component.module.css";
export default function EventDetailCardComponent({ event }) {
  return (
    <div className={classes.details}>
      <h2>Details</h2>
      <p>Self serve wine bar with small plates.</p>
      <p>There are two ways to enjoy wine:</p>
      <ol>
        <li>
          Open a bar tab to receive a smart card to be used at our wine
          stations, then just pay your tab at the end of your experience.
        </li>
        <li>
          Prepay one of our smart cards and use it like a gift card. You can
          even take the smart card home and use it next time you come in.
        </li>
      </ol>
    </div>
  );
}
