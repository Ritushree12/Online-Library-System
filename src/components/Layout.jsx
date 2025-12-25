import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../index.css";

// Layout wraps pages that show the navbar
export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container page-content">{<Outlet />}</main>
    </>
  );
}
