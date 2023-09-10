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
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [publisher, setPublisher] = useState(props.publisher);
  const [year, setYear] = useState(props.year);
  const [pages, setPages] = useState(props.pages);

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
    });
    onClose();

    router.refresh();
  };

  return (
    <>
      <Button variant="solid" onClick={onOpen} colorScheme="blue">
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <form id="form-create" onSubmit={handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={25}>Update Book Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  name="Title"
                  type="text"
                  placeholder="Judul Buku"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Author</FormLabel>
                <Input
                  name="author"
                  type="text"
                  placeholder="Nama Pengarang"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Publisher</FormLabel>
                <Input
                  name="publisher"
                  type="text"
                  placeholder="Nama Penerbit"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Year</FormLabel>
                <Input
                  name="year"
                  type="number"
                  placeholder="Tahun Terbit"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Pages</FormLabel>
                <Input
                  name="pages"
                  type="number"
                  placeholder="Jumlah Halaman"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
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
