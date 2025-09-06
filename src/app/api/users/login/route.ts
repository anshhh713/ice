import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET not set in .env");

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const currentUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!currentUser) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isCorrect = await verifyPassword(password, currentUser.password);
    if (!isCorrect) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { id: currentUser.id, email: currentUser.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Create response and set cookie
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,     // cannot be accessed by JS
      secure: process.env.NODE_ENV === "production", // only https in prod
      path: "/",          // cookie valid everywhere in app
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
