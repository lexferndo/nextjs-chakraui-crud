"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function EditBook(props) {
  const { id } = props;
  const router = useRouter();

  const DeleteBook = async () => {
    try {
      await fetch(`http://localhost:3000/api/book/${id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="ghost" colorScheme="red" onClick={DeleteBook}>
      Delete
    </Button>
  );
}
