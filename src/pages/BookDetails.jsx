import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>

      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {book.rating}
      </p>

      <button onClick={() => navigate("/books")}>Back to Browse</button>
    </div>
  );
}
