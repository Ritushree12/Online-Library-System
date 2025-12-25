import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Online Library</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/books">Browse books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}
