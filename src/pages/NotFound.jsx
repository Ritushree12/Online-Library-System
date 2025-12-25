import { Link, useLocation } from "react-router-dom";
import "../index.css";

// 404 must NOT show header, and should show invalid URL
export default function NotFound() {
  const location = useLocation();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="overlay">
      <h1>404 — Page Not Found</h1>
      <p className="invalid-route">
        Invalid route: <strong>{location.pathname}</strong>
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}
