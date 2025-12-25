import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";
import "../index.css";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);

  const [search, setSearch] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch from Google Books API
  async function fetchGoogleBooks() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search || "books"}`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();

      const formatted = data.items?.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.join(", ") || "Unknown",
        description: item.volumeInfo.description || "No description available",
        rating: item.volumeInfo.averageRating || 0,
        category: item.volumeInfo.categories?.[0] || "Unknown",
        image: item.volumeInfo.imageLinks?.thumbnail || "",
      }));

      setGoogleBooks(formatted || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const filtered = books
    .filter((b) => (!category ? true : b.category === category))
    .filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <h2>Browse Books {category ? `(${category})` : ""}</h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchGoogleBooks} style={{ marginLeft: 10 }}>
        Fetch From Google Books
      </button>

      <div style={{ marginTop: "10px" }}>
        <Link to="/books/Fiction">Fiction</Link> |{" "}
        <Link to="/books/Non-Fiction">Non-Fiction</Link> |{" "}
        <Link to="/books/Sci-Fi">Sci-Fi</Link>
      </div>

      <h3>Local Library Books</h3>
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>

      <h3>Google Books Results</h3>

      {/* 👇 Loading + Error messages appear here */}
      {loading && <p>Loading books…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="grid">
        {googleBooks.length > 0
          ? googleBooks.map((book) => <BookCard key={book.id} book={book} />)
          : !loading &&
            !error && <p>Click “Fetch From Google Books” to load books.</p>}
      </div>
    </div>
  );
}
