
import { NextRequest, NextResponse } from "next/server";


import {z} from "zod";

 const schema = z.object({
  name: z.string().min(2, "Name is required and should be at least 2 characters long"),
  
});

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id < 10) {
    return NextResponse.json({
      id: params.id,
      name: "Alice",
      email: "@gmail.com",
    });
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}



export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    // Use error.issues instead of error.errors
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  const userId = parseInt(params.id, 10);
  if (userId > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: userId,
    name: validation.data.name, // use parsed, validated data
  });
}



export async function DELETE(
  request: NextRequest,
  { params }: { params:  Promise<{ id: string }> }
) {

    const { id } = await params;
    const dadId = parseInt(id, 10);

  if (dadId < 10) {
    return NextResponse.json({ message: `User deleted` }, { status: 201});
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}