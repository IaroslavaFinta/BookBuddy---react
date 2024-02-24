/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ user, setUser, token, setToken }) {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          email: registerData.email,
          password: registerData.password,
        }),
      });
      const result = await response.json();
      if (result.message == "Registration successful") {
        setUser(`${registerData.email}`);
        setToken(result.token);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {token ? (
        <h1>Logged in as {user}</h1>
      ) : (
        <div className="login">
          <h1>Register</h1>
          <form>
            {/* first name */}
              <label htmlFor={"first-name"} className="firstName">
              First Name:{" "}
              <input
                onChange={(e) => {
                  setRegisterData({
                    firstName: e.target.value,
                    lastName: registerData.lastName,
                    email: registerData.email,
                    password: registerData.password,
                  });
                }}
                type={"text"}
                name={"first-name"}
                value={registerData.firstName}
              />
            </label>
            {/* last name */}
            <label htmlFor={"last-name"} className="lastName">
              Last Name:{" "}
              <input
                onChange={(e) => {
                  setRegisterData({
                    firstName: registerData.firstName,
                    lastName: e.target.value,
                    email: registerData.email,
                    password: registerData.password,
                  });
                }}
                type={"text"}
                name={"last-name"}
                value={registerData.lastName}
              />
            </label>
            {/* email */}
            <label htmlFor={"email"} className="email">
              Email address:{" "}
              <input
                onChange={(e) => {
                  setRegisterData({
                    firstName: registerData.firstName,
                    lastName: registerData.lastName,
                    email: e.target.value,
                    password: registerData.password,
                  });
                }}
                type={"email"}
                name={"email"}
                value={registerData.email}
              />
            </label>
            {/* password */}
            <label htmlFor={"password"} className="password">
              Password:{" "}
              <input
                onChange={(e) => {
                  setRegisterData({
                    firstName: registerData.firstName,
                    lastName: registerData.lastName,
                    email: registerData.email,
                    password: e.target.value,
                  });
                }}
                type={"password"}
                name={"password"}
                value={registerData.password}
              />
            </label>
            {/* button for register an account */}
            <button onClick={handleSubmit}>Register</button>
          </form>
          {/* navigate user to login page if they have an account */}
          <p>If you already has an account, just log in</p>
          <button onClick={() => navigate("/login")}>Log in</button>
        </div>
      )}
    </>
  );
}
