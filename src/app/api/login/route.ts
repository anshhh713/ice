
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { username, email, password } = await request.json();
    
        // Perform login logic here
    
        return NextResponse.json({ 
            message: "Login successful",
            success: true
        });

    } catch (error: any) {
        return NextResponse.json({error: error.message},
             {status: 500})
    }
}
