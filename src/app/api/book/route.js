import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const files = formData.get("image");

    const bytes = await files.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const paths = path.join(
      __dirname,
      `../../../../../public/upload`,
      files.name
    );

    await writeFile(paths, buffer);

    const newBook = await prisma.book.create({
      data: {
        title: formData.get("title"),
        author: formData.get("author"),
        publisher: formData.get("publisher"),
        year: parseInt(formData.get("year")),
        pages: parseInt(formData.get("pages")),
        image: `/upload/${files.name}`,
      },
    });
    return NextResponse.json(newBook);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." });
  }
};

export const GET = async () => {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json(books);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error." });
  }
};
