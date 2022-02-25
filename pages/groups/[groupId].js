import GroupDetailHeaderComponent from "../../components/groups/group-detail-header-component";
import GroupDetailNavComponent from "../../components/groups/group-detail-nav-component";
import GroupDetailComponent from "../../components/groups/group-detail-component";
import PastEventsComponent from "../../components/groups/past-events-component";
import { getGroupById } from "../../dummy-data";

export default function GroupDetailPage(props) {
  const group = props.group;
  if (!group) {
    return <p>No group found!</p>;
  }

  const mainStyle = {
    backgroundColor: "lightgray",
    height: "100vh",
    minWidth: "500px",
  };

  return (
    <>
      <GroupDetailHeaderComponent group={group[0]} />
      <GroupDetailNavComponent />
      <main style={mainStyle}>
        <GroupDetailComponent group={group[0]} />
        <PastEventsComponent groupId={group[0].id} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const groupId = context.params.groupId;
  const group = getGroupById(groupId);

  return {
    props: { group: group },
  };
}
