import { NextRequest, NextResponse } from "next/server";
import { users, type User } from "../../../../../fakedb";
const currentUser: User | undefined = users.find(u => u.username === "test1");
// GET profile
export async function GET() {
  // In real app, fetch from DB/session
  

  return NextResponse.json(currentUser);
}

// UPDATE profile (use PUT or PATCH)
export async function PUT(req: NextRequest) {
  try {
    const { updatedUsername, updatedDP } = await req.json();

    if (!updatedUsername && !updatedDP) {
      return NextResponse.json(
        { error: "Nothing to update" },
        { status: 400 }
      );
    }

    // TODO: update user in DB/session here
    return NextResponse.json({
      message: "Profile updated successfully",
      success: true,
      updated: { updatedUsername, updatedDP },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
