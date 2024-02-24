/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

  async function getBooks() {
    try {
      const response = await fetch(`${API_URL}/books`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setBooks(result.books);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  },[]);

  // a function for search
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <>
      {/* input of type search inside the return statement */}
      <div className="search-bar">
        <div className="input-wrapper">
          <input
            className="search-input"
            type="search"
            placeholder="Type to search for a book"
            value={searchInput}
            onChange={handleChange}
          />
        </div>
      </div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.filter((book)=>book.title.toLowerCase().match(searchInput.toLowerCase())).map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.available ? "yes" : "no"}</td>
                  <td>
                    <button onClick={() => navigate(`/books/${book.id}`)}>
                      View Book
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
