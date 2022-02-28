import GroupDetailHeaderComponent from "../../components/groups/group-detail-header-component";
import GroupDetailNavComponent from "../../components/groups/group-detail-nav-component";
import GroupDetailComponent from "../../components/groups/group-detail-component";
import PastEventsComponent from "../../components/groups/past-events-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function GroupDetailPage() {
  const router = useRouter();
  const groupId = router.query.groupId;
  const [group, setGroup] = useState();

  useEffect(() => {
    fetch("/api/groups/" + groupId)
      .then((response) => response.json())
      .then((data) => {
        setGroup(...data.group);
      });
  }, [groupId]);

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
      <GroupDetailHeaderComponent group={group} />
      <GroupDetailNavComponent />
      <main style={mainStyle}>
        <GroupDetailComponent group={group} />
        <PastEventsComponent groupId={groupId} />
      </main>
    </>
  );
}
