'use server';

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

const USERS_FILE = path.join(process.cwd(), "users.json");

function readUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const users = readUsers();
        const user = users.find((u: any) => u.email === credentials.email);
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.email, email: user.email, name: user.name };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-here-make-it-long-and-random",
  pages: {
    signIn: "/login",
  }
});

export { handler as GET, handler as POST }; 