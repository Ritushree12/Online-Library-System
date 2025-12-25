import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import "../index.css";

export default function Home() {
  const books = useSelector((state) => state.books);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div className="home-page overlay">
      <h1>Welcome to the Online Library</h1>

      <h3>Book Categories</h3>
      <ul className="no-bullets">
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <div className="section">
        <h3>Popular Books</h3>
        <div className="popular-books">
          {books.slice(0, 3).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
