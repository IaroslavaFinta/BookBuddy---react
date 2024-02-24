/* TODO - add your code to create a functional React component that renders a login form */
// This route is used for a user to login when they already have an account.
// On success, you will be given a JSON Web Token to be passed to the server for requests requiring authentication.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ user, setUser, token, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
        }),
      });
      const result = await response.json();
      if (result.message == "Login successful") {
        setUser(`${email}`);
        setToken(result.token);
      } else {
        setError(result.message);
      }
      // reset values for email and password.
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {token ? (
        <h1>Logged in as {user}</h1>
      ) : (
        <div className="login">
          <h1>Login to your account</h1>

          <form>
            <label htmlFor="email" className="password">
            Email address:{" "}
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type={"text"}
                name={"email"}
                id={"email"}
                value={email}
              />
            </label>

            <label htmlFor="password" className="password">
              Password:{" "}
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type={"password"}
                name={"password"}
                id={"password"}
              />
            </label>

            <button type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </form>

          <p>Don't have an account yet?</p>
          <button onClick={() => navigate("/register")}>Sign Up</button>
        </div>
      )}
    </>
  );
}

