"use client";
import FormBook from "../editbook/formeditbook";

export default function EditBook(props) {
  const { id, title, author, publisher, year, pages } = props;

  const getEditBook = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      await fetch(`http://localhost:3000/api/book/${id}`, {
        method: "PUT",
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormBook
      onSubmit={getEditBook}
      title={title}
      author={author}
      publisher={publisher}
      year={year}
      pages={pages}
    />
  );
}
