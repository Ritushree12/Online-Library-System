import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Online Library</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/books">Browse books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}
