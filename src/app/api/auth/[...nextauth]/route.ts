import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { JWT_SECRET } from "@/lib/config";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
            },
            async authorize(credentials) {
                if (credentials?.username) {
                    return { id: "asdf", name: credentials.username };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt", // <-- THIS makes NextAuth use JWT for session storage
    },
    jwt: {
        secret: JWT_SECRET,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session!.user!.name = token.name;
            }
            return session;
        },
    },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
