import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword, createJWT } from "@/lib/auth";

export const runtime = "nodejs"; // jwt needs Node runtime

export async function POST(req: NextRequest) {
  try {
    const { email, username, password, displayName, dp } = await req.json();

    // 1) basic validation
    if (!email || !username || !password) {
      return NextResponse.json(
        { error: "Email, username and password are required" },
        { status: 400 }
      );
    }

    // 2) check if user exists
    const exists = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (exists) {
      return NextResponse.json(
        { error: "Email or username already taken" },
        { status: 409 }
      );
    }

    // 3) hash password
    const hashed = await hashPassword(password);

    // 4) create user in DB
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashed,
        displayName: displayName ?? username,
        dp: dp ?? "", // optional profile pic
      },
    });

    // 5) create JWT
    const token = createJWT({ userId: user.id, username: user.username });

    // 6) return response + set cookie
    const res = NextResponse.json({
      message: "User created successfully!",
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        displayName: user.displayName,
        dp: user.dp,
      },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
