import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "maheer@info.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in");
        }

        client.close();
        console.log(user);
        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
});
