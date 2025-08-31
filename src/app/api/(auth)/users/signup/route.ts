import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // TODO: Replace this with real signup logic
    // - validate email
    // - hash password
    // - insert user into DB

    return NextResponse.json({
      message: "User created successfully!",
      success: true
    });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
