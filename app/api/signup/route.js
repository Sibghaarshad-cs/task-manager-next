import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    // check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

   const response = NextResponse.json({
  message: "Signup successful",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
  },
});

response.cookies.set(
  "userId",
  user.id.toString(),
  {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  }
);

return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}