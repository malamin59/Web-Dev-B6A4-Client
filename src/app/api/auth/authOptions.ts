import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

CredentialsProvider({
  name: "Credentials",

  credentials: {
    email: { label: "Email", type: "text" },
    password: { label: "Password", type: "password" },
  },

  async authorize(credentials) {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data.data.user;
  },
}),


    
  ],

  callbacks: {
  async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },

 async session({ session, token }) {
      if (session.user) {
        (session.user as any).provider = token.provider; // ✅ FIXED TS ISSUE
      }
      return session;
    },
  },
};