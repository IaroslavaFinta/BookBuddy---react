/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div id="navbar">
      <Link to="/" className="nav">
        Home
      </Link>
      <Link to="/books" className="nav">
        Books
      </Link>
      <Link to="/account" className="nav">
        Account
      </Link>
      <Link to="/login" className="nav">
        Login
      </Link>
      <Link to="/register" className="nav">
        Register
      </Link>
    </div>
  );
}
