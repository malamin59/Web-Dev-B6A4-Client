import NextAuth, { DefaultSession } from "next-auth";
type Role = "STUDENT" | "ADMIN" | "TUTOR";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: Role;
      provider?: string;
      phone?: string;
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: Role;
    provider?: string;
    phone?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: Role;
    provider?: string;
    phone?: string;
    accessToken?: string;
  }
}
