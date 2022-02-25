import classes from "./member-groups.module.css";

export default function MemberGroupsComponent(props) {
  return <section className={classes.memberGroups}>{props.children}</section>;
}
