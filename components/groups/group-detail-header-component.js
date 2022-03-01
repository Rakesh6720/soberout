import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./group-detail-header-component.module.css";

export default function GroupDetailHeaderComponent({ group }) {
  const [image, setImage] = useState("/images/karate.jpg");
  const [host, setHost] = useState("");

  useEffect(() => {
    setImage(group.img);
    fetch("/api/users/" + group.hostId)
      .then((response) => response.json())
      .then((data) => setHost(data.user));
  }, []);

  return (
    <div className={classes.container}>
      <div>
        <Image
          className={classes.image}
          src={group.img}
          alt={group.title}
          width="300"
          height="200"
        />
      </div>
      <div className={classes.details}>
        <div className={classes.title}>{group.title}</div>
        <div className={classes.info}>
          <div className={classes.location}>{group.date}</div>
          <div className={classes.members}>GROUP MEMBERS</div>
          <div className={classes.organizer}>
            Organized by: {host.firstName} {host.lastName}
          </div>
        </div>
      </div>
    </div>
  );
}
