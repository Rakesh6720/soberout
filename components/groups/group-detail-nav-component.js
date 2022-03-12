import { useRouter } from "next/router";
import { Link } from "next/link";
import classes from "./group-detail-nav-component.module.css";

export default function GroupDetailNavComponent() {
  const router = useRouter();
  const params = router.query.groupId;
  console.log(params);
  return (
    <div className={classes.container}>
      
    </div>
  );
}
