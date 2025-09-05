// app/api/users/profile/continue-watching/route.ts (or adjust path based on your folder structure)

import { NextResponse,NextRequest } from "next/server";
import { users } from "../../../../../../../fakedb";

interface Params {
  params: { username: string };
}

export async function GET(req: NextRequest, { params }: Params) {
  const { username } = params;

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
    email: user.email,
    continueWatching: user.continueWatching,
  });
}
