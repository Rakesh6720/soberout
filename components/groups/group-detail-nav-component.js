import { Link } from "next/link";
import { useRouter } from "next/router";

import classes from "./group-detail-nav-component.module.css";

export default function GroupDetailNavComponent() {
  const router = useRouter();
  const params = router.query.groupId;
  console.log(params);
  return (
    <div className={classes.container}>
      <ul className={classes.nav}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href={`/groups/${params}/events`}>Events</a>
        </li>
      </ul>
    </div>
  );
}
