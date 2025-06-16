import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Example login logic; replace with your real one
        if (
          credentials?.username === "admin" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Admin User", email: "admin@example.com" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // <-- THIS makes NextAuth use JWT for session storage
  },
  jwt: {
    // Optional: specify encryption or secret
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      // `user` is only available at login; add extra data to the token
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach custom token fields to the session object
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
