"use client";
import {
  Card,
  CardBody,
  Image,
  Divider,
  ButtonGroup,
  CardFooter,
  Button,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import EditBook from "../editbook/editbook";
import DeleteBook from "../deletebook/deletebook";

export default function Cards(props) {
  const { book } = props;
  return (
    <Card maxW="md">
      <CardBody>
        <Image
          src={`http://localhost:3000/${book.image}`}
          alt="image file"
          boxSize="250px"
          objectFit="fill"
        ></Image>
        <Stack mt="6" spacing="3">
          <Heading size="lg">{book.title}</Heading>
          <Text fontSize="sm">Pengarang : {book.author}</Text>
          <Text fontSize="sm">Penerbit: {book.publisher}</Text>
          <Text fontSize="sm">Tahun Terbit : {book.year}</Text>
          <Text fontSize="sm">Jumlah Halaman : {book.pages}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={`#editbook/${book.id}`}>
            <EditBook
              id={book.id}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              year={book.year}
              pages={book.pages}
            />
          </Link>

          <DeleteBook id={book.id} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
