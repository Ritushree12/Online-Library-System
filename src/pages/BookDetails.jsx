import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) return <p className="error-msg overlay">Book not found.</p>;

  return (
    <div className="overlay">
      <div className="book-detail-image">
        {book.image && <img src={book.image} alt={book.title} />}
      </div>
      <h2 className="book-detail-title">{book.title}</h2>

      <p className="author">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="book-detail-description">
        <strong>Description:</strong> {book.description}
      </p>
      <p className="book-detail-rating">
        <strong>Rating:</strong> ⭐ {book.rating}
      </p>

      <button className="back-button" onClick={() => navigate("/books")}>
        Back to Browse
      </button>
    </div>
  );
}
