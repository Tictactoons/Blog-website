import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

 const schema = z.object({
  name: z.string().min(2, "Name is required and should be at least 2 characters long"),
  
});


export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Alice", email: '@gmail.com' },
    { id: 2, name: "Mode", email: '@outlook.com' },
  ]);
}

export async function POST(request: NextRequest) { 
  const body = await request.json();
  const validation = schema.safeParse(body);
  
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }
  
  return NextResponse.json({ id: 3, name: body.name, email: body.email });
}