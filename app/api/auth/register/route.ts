import { NextResponse } from "next/server";
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

function writeUsers(users: any[]) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  const users = readUsers();
  const existingUser = users.find((u: any) => u.email === email);
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword, name });
  writeUsers(users);
  return NextResponse.json({ message: "User registered" }, { status: 201 });
} 