import Cards from "../components/home/card";
import Heading from "../components/home/heading";

export default async function HomePage() {
  async function getAllBook() {
    const response = await fetch("http://localhost:3000/api/book");
    return response.json();
  }
  const books = await getAllBook();
  return (
    <Heading>
      {books.map((book) => {
        return <Cards key={book.id} book={book} />;
      })}
    </Heading>
  );
}
