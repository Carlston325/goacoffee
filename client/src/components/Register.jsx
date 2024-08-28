import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const namePattern = /^[a-zA-Z\s'-]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
    setError(false);
    setErrorMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let validRegistration = true;

    if (namePattern.test(registerUser.name)) {
      console.log("name is valid");
    } else {
      console.log("error in name field");
      validRegistration = false;
    }

    if (emailPattern.test(registerUser.email)) {
      console.log("email is valid");
    } else {
      console.log("error in email field");
      validRegistration = false;
    }

    if (!registerUser.password || !registerUser.confirmPassword) {
      console.log("Both password fields are required");
      validRegistration = false;
    } else if (registerUser.password !== registerUser.confirmPassword) {
      console.log("password does not match");
      validRegistration = false;
    } else {
      console.log("password is valid");
    }

    if (validRegistration) {
      try {
        const response = await axios.post(
          "http://localhost:5000/register",
          registerUser
        );
        if (response.data.success) {
          navigate("/carlstons-club/login");
        } else {
          setErrorMessage(response.data.message);
          setError(true);
        }
      } catch (err) {
        console.error("There was an error!", err);
      }

      console.log("successful");
    } else {
      console.log("fail");
    }
  }

  return (
    <>
      <main className="epUgWD" style={{ minHeight: "400px" }}>
        <div className="flex flex-col items-center mb-12 mx-auto max-w-[600px] px-5 text-center">
          <h1
            id="introTitle"
            className="mb-5 leading-[40px] title darkFont"
            style={{ lineHeight: "100px" }}
          >
            Register
          </h1>
        </div>
        <form action="POST">
          <div className="form-floating my-2 ">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              className="form-control p-1"
              id="nameInput"
              placeholder="John Doe"
              required
            />
            <label htmlFor="nameInput">First Name</label>
          </div>
          <div className="form-floating my-2 ">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="form-control p-1"
              id="emailInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating my-2 ">
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control p-1"
              id="passwordInput"
              placeholder="Password"
              required
            />
            <label htmlFor="passwordInput">Password</label>
          </div>

          <div className="form-floating my-2 ">
            <input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              className="form-control p-1"
              id="confirmPasswordInput"
              placeholder="Confirm Password"
              required
            />
            <label htmlFor="confirmPasswordInput">Confirm Password</label>
          </div>
          <button
            className="btnDark w-100 p-1 m-1"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        {error ? (
          <>
            <div>{errorMessage}</div>
          </>
        ) : null}
        <div className="flex align-middle justify-center text-center border-black m-5">
          <a
            id="loginToAccount"
            href="/carlstons-coffee/carlstons-club/login"
            className="text-[14px] leading-[20px] mt-5 link-underline-dark"
          >
            Already have an account!
          </a>
        </div>
      </main>
    </>
  );
}

export default Register;
