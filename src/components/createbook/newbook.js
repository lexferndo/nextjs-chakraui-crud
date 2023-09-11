import FormBook from "../createbook/formnewbook";

export default function AddBook() {
  const getNewBook = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      await fetch("http://localhost:3000/api/book", {
        method: "POST",
        body: formData,
        cache: "no-store",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <FormBook onSubmit={getNewBook} />;
}
