import { useRouter } from "next/router";
import { Link } from "next/link";
import classes from "./group-detail-nav-component.module.css";

export default function GroupDetailNavComponent({ group }) {
  const router = useRouter();
  const params = router.query.groupId;
  console.log(params);
  console.log(group);
  return (
    <div className={classes.container}>
      <ul className={classes.nav}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Members</a>
        </li>
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">Discussions</a>
        </li>
      </ul>
    </div>
  );
}
