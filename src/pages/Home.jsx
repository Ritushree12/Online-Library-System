import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import "../index.css";

export default function Home() {
  const books = useSelector((state) => state.books);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>

      <h3>Book Categories</h3>
      <ul className="no-bullets">
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h3>Popular Books</h3>
      <div className="grid">
        {books.slice(0, 3).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
