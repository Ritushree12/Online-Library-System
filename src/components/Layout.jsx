import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Layout wraps pages that SHOULD have a header
export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container">{<Outlet />}</main>
    </>
  );
}
