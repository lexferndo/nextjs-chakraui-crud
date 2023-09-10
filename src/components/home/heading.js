"use client";

import { Container, Heading, Text, Grid, Link } from "@chakra-ui/react";
import AddBook from "../createbook/newbook";

export default function Headings({ children }) {
  return (
    <>
      <Container maxW="2xl" centerContent marginBottom={10} marginTop={5}>
        <Heading>Our Book</Heading>
        <Text>
          Add Your Book{" "}
          <Link color="teal.500" href="#newbook">
            <AddBook />
          </Link>
        </Text>
      </Container>

      <Container maxW="full">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {children}
        </Grid>
      </Container>
    </>
  );
}
