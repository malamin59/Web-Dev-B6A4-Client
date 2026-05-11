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
          },
        );

        // // ✅ JSON কিনা আগে চেক করো
        // const contentType = res.headers.get("content-type");
        // if (!contentType?.includes("application/json")) {
        //   throw new Error("Server error: invalid response");
        // }
        // console.log(contentType)

        const data = await res.json();
        if (!res.ok) {
          return null;
        }

        return {
          id: data.data.user.id,
          email: data.data.user.email,
          name: data.data.user.name,
          role: data.data.user.role,
          phone: data.data.user.phone,
          accessToken: data.data.accessToken,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.provider = account.provider;

        // SOCIAL LOGIN
        if (account.provider !== "credentials") {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/social-login`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: user?.name,
                  email: user?.email,
                  provider: account.provider,
                }),
              },
            );

            const data = await res.json();
            // console.log("Social login API response:", JSON.stringify(data));

            token.id = data.data.user.id;
            token.role = data.data.user.role;
            token.accessToken = data.data.accessToken;
            token.name = data.data.user.name;
            token.email = data.data.user.email;
          } catch (error) {
            console.error("Social login error:", error);
          }
        }

        // CREDENTIALS LOGIN
        if (account.provider === "credentials" && user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.role = user.role;
          token.phone = user.phone;
          token.accessToken = user.accessToken;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.provider = token.provider;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.phone = token.phone as string;
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
};
