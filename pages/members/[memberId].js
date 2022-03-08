import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function MemberPage({ user }) {
  return (
    <>
      <div>Member Home Page</div>
      {user ? <p>{user.email}</p> : <p>Loading user...</p>}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const response = await fetch(`http://localhost:3000/api/users/${session.id}`);
  const data = await response.json();
  const user = data.user;
  return {
    props: {
      user,
    },
  };
}
