import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.rating
    ) {
      return setError("All fields are required!");
    }

    const newBook = {
      ...form,
      id: Date.now().toString(),
      rating: Number(form.rating),
    };

    dispatch(addBook(newBook));

    navigate("/books");
  }

  return (
    <div>
      <h2>Add New Book</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <br /> <br />
        <input
          className="form-input"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <br /> <br />
        <input
          className="form-input"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <br /> <br />
        <textarea
          className="form-input"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>
        <br /> <br />
        <input
          className="form-input"
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          onChange={handleChange}
        />
        <br /> <br />
        <button className="form-button" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}
