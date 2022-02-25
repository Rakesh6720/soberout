import classes from "./group-detail-nav-component.module.css";

export default function GroupDetailNavComponent() {
  return (
    <div className={classes.container}>
      <ul className={classes.nav}>
        <li>About</li>
        <li>Events</li>
        <li>Members</li>
        <li>Photos</li>
        <li>Discussions</li>
        <li>More</li>
        <li>
          <button className={classes.btn}>You're a member</button>
        </li>
      </ul>
    </div>
  );
}
