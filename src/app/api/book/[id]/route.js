import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    const books = await prisma.book.findUnique({
      where: {
        id: +id,
      },
    });
    return NextResponse.json(books);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    const books = await prisma.book.delete({
      where: {
        id: +id,
      },
    });

    return NextResponse.json({ message: "Delete Book Succesfully" });
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (req, { params }) => {
  const { id } = params;
  try {
    const formData = await req.formData();
    const books = await prisma.book.update({
      where: {
        id: +id,
      },
      data: {
        title: formData.get("title"),
        author: formData.get("author"),
        publisher: formData.get("publisher"),
        year: parseInt(formData.get("year")),
        pages: parseInt(formData.get("pages")),
      },
    });

    return NextResponse.json(books);
  } catch (error) {
    console.log(error);
  }
};
