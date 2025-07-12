import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getToken } from "next-auth/jwt";

const USERS_FILE = path.join(process.cwd(), "users.json");
const SECRET = process.env.NEXTAUTH_SECRET || "your-secret-key-here-make-it-long-and-random";

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

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: SECRET });
  if (!token?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const users = readUsers();
  const user = users.find((u: any) => u.email === token.email);
  return NextResponse.json({ wishlist: user?.wishlist || [] });
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: SECRET });
  if (!token?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { product } = await req.json();
  const users = readUsers();
  const user = users.find((u: any) => u.email === token.email);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  
  if (!user.wishlist) user.wishlist = [];
  
  // Check if product already exists in wishlist
  const existingIndex = user.wishlist.findIndex((item: any) => item.id === product.id);
  if (existingIndex === -1) {
    user.wishlist.push(product);
  }
  
  writeUsers(users);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const token = await getToken({ req, secret: SECRET });
  if (!token?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { productId } = await req.json();
  const users = readUsers();
  const user = users.find((u: any) => u.email === token.email);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  
  if (user.wishlist) {
    user.wishlist = user.wishlist.filter((item: any) => item.id !== productId);
  }
  
  writeUsers(users);
  return NextResponse.json({ success: true });
} 