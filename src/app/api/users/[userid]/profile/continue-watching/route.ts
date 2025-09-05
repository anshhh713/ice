// app/api/users/profile/continue-watching/route.ts (or adjust path based on your folder structure)

import { NextRequest, NextResponse } from "next/server";
import { users } from "../../../../../../../fakedb";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { success: false, message: "Missing username parameter" },
      { status: 400 }
    );
  }

  const user = users.find((u) => u.username === username);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    username: user.username,
    continueWatching: user.continueWatching,
  });
}
