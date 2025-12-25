import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from "../features/books/booksSlice";
import "../index.css";

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addBook(book));
    alert("Book added to library!");
  }

  return (
    <div className="card">
      {book.image && <img src={book.image} alt={book.title} />}

      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>

      <Link to={`/book/${book.id}`}>View Details</Link>
      <br />
      <br />
      <button onClick={handleAdd}>Add to Library</button>
    </div>
  );
}
