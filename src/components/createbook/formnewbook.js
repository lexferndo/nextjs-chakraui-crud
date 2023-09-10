"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useRouter } from "next/navigation";

import { useState } from "react";

export default function FormBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [image, setImage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      title,
      author,
      publisher,
      year,
      pages,
      image,
    });
    onClose();

    router.refresh();
  };

  return (
    <>
      <Button variant={"link"} onClick={onOpen} color="teal.500">
        Here
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <form id="form-create" onSubmit={handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={25}>Create Book Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  name="Title"
                  type="text"
                  placeholder="Judul Buku"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Author</FormLabel>
                <Input
                  name="author"
                  type="text"
                  placeholder="Nama Pengarang"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Publisher</FormLabel>
                <Input
                  name="publisher"
                  type="text"
                  placeholder="Nama Penerbit"
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Year</FormLabel>
                <Input
                  name="year"
                  type="number"
                  placeholder="Tahun Terbit"
                  onChange={(e) => setYear(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Pages</FormLabel>
                <Input
                  name="pages"
                  type="number"
                  placeholder="Jumlah Halaman"
                  onChange={(e) => setPages(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input
                  name="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                form="form-create"
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
