import { MongoClient } from "mongodb";
import { getSession } from "next-auth/react";

export default function MemberPage({ user }) {
  if (!user) {
    return <p>No user found...</p>;
  }
  const userFromDb = user;
  console.log(userFromDb);
  return (
    <>
      <div>Member Home Page</div>
      {/* {user ? <p>{user.email}</p> : <p>Loading user...</p>} */}
      {userFromDb ? <p>{user.email}</p> : <p>Loading user from DB...</p>}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
        user: null,
      },
    };
  }
  const response = await fetch(`http://localhost:3000/api/users/${session.id}`);
  const data = await response.json();
  const user = data.user;

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userFromDbNotJSON = await db
    .collection("users")
    .findOne({ email: user.email });

  const userFromDb = JSON.parse(JSON.stringify(userFromDbNotJSON));

  if (userFromDb) {
    return {
      props: {
        user: { id: userFromDb._id, email: userFromDb.email },
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
