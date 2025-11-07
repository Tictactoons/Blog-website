import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Optionally, OAuth providers:
// import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check credentials here (lookup user in DB)
        // Example: fake user
        const user = { id: "1", name: "Isaiah Onans", email: "isaiah@dev.com" };
        if (credentials?.email === "isaiah@dev.com" && credentials?.password === "1234") {
          return user;
        }
        return null;
      },
    }),
    
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login", // Redirect errors back to login page
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
