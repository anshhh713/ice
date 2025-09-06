import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({success: true, message: "Logged Out"})
    response.cookies.set({
        name: 'token',
        value: '',
        maxAge: 0, // expire cookie immediately
        path: '/',
    });
    return response;
}