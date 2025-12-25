import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from "../features/books/booksSlice";
import "../index.css";

export default function BookCard({ book }) {
  const libraryBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  function handleAdd() {
    const exists = libraryBooks.find((b) => b.id === book.id);
    if (!exists) {
      dispatch(addBook(book));
      alert("Book added to library!");
    } else {
      alert("Book already in library!");
    }
  }

  return (
    <div className="card">
      {book.image && <img src={book.image} alt={book.title} />}

      <h4>{book.title}</h4>
      <p className="author">Author: {book.author}</p>

      <Link to={`/book/${book.id}`}>View Details</Link>

      <button className="library-button" onClick={handleAdd}>
        Add to Library
      </button>
    </div>
  );
}
