import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Layout contains Navbar — 404 will be OUTSIDE this */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BrowseBooks />} />
          <Route path=":category" element={<BrowseBooks />} />
        </Route>

        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
      </Route>

      {/* 404 page WITHOUT header */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
