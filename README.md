# Online Library System

A modern, responsive online library management system built with React, allowing users to browse, search, and manage books from both a local library and Google Books API.

## 🚀 Features

- **Browse Books**: Explore books by categories (Fiction, Non-Fiction, Sci-Fi)
- **Search Functionality**: Search books by title or author
- **Google Books Integration**: Fetch and display books from Google Books API
- **Book Details**: View detailed information for any book
- **Add to Library**: Add books to your personal library collection
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: CSS3
- **API**: Google Books API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritushree12/Online-Library-System.git
   cd Online-Library-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in the terminal)

## 🎯 Usage

- **Home Page**: Welcome page with navigation
- **Browse Books**: View all books, filter by category, or search
- **Add Books**: Use the "Add Book" page to add new books to the local library
- **Book Details**: Click "View Details" on any book to see more information
- **Google Books**: Click "Fetch From Google Books" to load books from Google's API

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BookCard.jsx     # Book display card
│   ├── Layout.jsx       # Main layout component
│   └── Navbar.jsx       # Navigation bar
├── features/            # Redux slices and data
│   └── books/           # Book-related state management
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   ├── BrowseBooks.jsx  # Book browsing page
│   ├── AddBook.jsx      # Add book form
│   ├── BookDetails.jsx  # Book details page
│   └── NotFound.jsx     # 404 page
├── app/                 # Redux store configuration
└── assets/              # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **GitHub Repository**: [https://github.com/Ritushree12/Online-Library-System](https://github.com/Ritushree12/Online-Library-System)
- **Google Books API**: [https://developers.google.com/books](https://developers.google.com/books)

## 📞 Contact

For questions or feedback, please open an issue on GitHub.