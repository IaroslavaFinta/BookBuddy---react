import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Account from "./components/Account";
import Register from "./components/Register";
import Login from "./components/Login";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState(null);

  return (
    <>
      <h1 className="logo">
        <img
          id="logo-image"
          src="https://i.etsystatic.com/isla/00b301/58772757/isla_fullxfull.58772757_7uaeywc7.jpg?version=0"
          alt="book buddy logo"
        />
        Book Buddy
      </h1>
      <div id="container">
        <Navigation />
        <div id="main section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/account"
              element={<Account token={token} />}
            />
            <Route
              path="/register"
              element={
                <Register
                  user={user}
                  setUser={setUser}
                  token={token}
                  setToken={setToken}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  user={user}
                  setUser={setUser}
                  token={token}
                  setToken={setToken}
                />
              }
            />
            <Route
              path="/books"
              element={<Books />}
            />
            <Route path="/books/:id"
              element={<SingleBook token={token} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;