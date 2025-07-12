import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import fs from "fs";
import path from "path";

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

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: SECRET });
  
  if (!token?.email) {
    return NextResponse.json({ count: 0 });
  }

  // Fetch actual cart count from database
  const users = readUsers();
  const user = users.find((u: any) => u.email === token.email);
  
  if (!user || !user.cart) {
    return NextResponse.json({ count: 0 });
  }

  // Calculate total quantity of all items in cart
  const totalCount = user.cart.reduce((total: number, item: any) => total + (item.quantity || 1), 0);
  
  return NextResponse.json({ count: totalCount });
} 