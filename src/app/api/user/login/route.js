import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { cookies } from "next/headers";
const prisma = new PrismaClient();

export const POST = async (req, { params }) => {
  try {
    const { email, password } = await req.json();

    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!foundUser) {
      throw { name: "ErrorNotFound" };
    }

    const validPassword = bcrypt.compareSync(password, foundUser.password);

    if (validPassword) {
      const accessToken = jwt.sign(
        {
          id: foundUser.id,
          email: foundUser.email,
        },
        process.env.JWT_SECRET_KEY
      );

      cookies().set({
        name: "accessToken",
        value: accessToken,
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.json(
        {
          id: foundUser.id,
          email: foundUser.email,
          accessToken,
        },
        { status: 200 }
      );
    } else {
      throw { name: "InvalidCredentials" };
    }
  } catch (error) {
    console.log(error);
  }
};
