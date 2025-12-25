import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "../index.css";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) => state.books.find((b) => b.id === id));
  const [googleBook, setGoogleBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!book) {
      // Fetch from Google Books API if not in local library
      fetchGoogleBook();
    }
  }, [book, id]);

  async function fetchGoogleBook() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch book details");
      const data = await res.json();
      const item = data;
      const formatted = {
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.join(", ") || "Unknown",
        description: item.volumeInfo.description || "No description available",
        rating: item.volumeInfo.averageRating || 0,
        category: item.volumeInfo.categories?.[0] || "Unknown",
        image: item.volumeInfo.imageLinks?.thumbnail || "",
      };
      setGoogleBook(formatted);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const displayBook = book || googleBook;

  if (loading) return <p className="overlay">Loading book details…</p>;
  if (error) return <p className="error-msg overlay">{error}</p>;
  if (!displayBook) return <p className="error-msg overlay">Book not found.</p>;

  return (
    <div className="overlay">
      <div className="book-detail-image">
        {displayBook.image && (
          <img src={displayBook.image} alt={displayBook.title} />
        )}
      </div>
      <h2 className="book-detail-title">{displayBook.title}</h2>

      <p className="author">
        <strong>Author:</strong> {displayBook.author}
      </p>
      <p className="book-detail-description">
        <strong>Description:</strong> {displayBook.description}
      </p>
      <p className="book-detail-rating">
        <strong>Rating:</strong> ⭐ {displayBook.rating}
      </p>

      <button className="back-button" onClick={() => navigate("/books")}>
        Back to Browse
      </button>
    </div>
  );
}
