import Image from "next/image";
import Link from "next/link";
import classes from "./group-item.module.css";
export default function GroupItemComponent({
  id,
  date,
  title,
  description,
  img,
}) {
  const externalLink = `/groups/${id}`;
  return (
    <div className={classes.group}>
      <Link href={externalLink}>
        <Image
          className={classes.image}
          src={img}
          width="100"
          height="150"
          alt={title}
        />
      </Link>

      <p className={classes.text}>{title}</p>
    </div>
  );
}
