import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/carlstons-club/account");
    }
  }, [props.isLoggedIn]);

  const [errorMessage, setErrorMessage] = useState("");
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userLogin
      );

      if (response.data.success) {
        const id = response.data.userId;
        props.getUserId(id);
        props.checkLoggedIn(true);
        navigate("/carlstons-club/account");
      } else {
        setErrorMessage(
          response.data.message || "Login failed. Please try again."
        );
        props.checkLoggedIn(false);
      }
    } catch (err) {
      console.error("Login failed:", err.message);
      setErrorMessage("An error occurred. Please try again later.");
    }
  }

  return (
    <main
      className="layout__Main-sc-78ulcb-0 epUgWD"
      style={{ minHeight: "400px" }}
    >
      <div className="flex flex-col items-center mb-12 mx-auto max-w-[600px] px-5 text-center">
        <h1
          id="introTitle"
          className="mb-5 leading-[40px] title darkFont"
          style={{ lineHeight: "100px" }}
        >
          Log In
        </h1>
      </div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form>
        <div className="form-floating my-2">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control p-1"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control p-1"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button
          className="btnDark w-100 p-1 m-1"
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </form>
      <div className="flex align-middle justify-center text-center border-black m-5">
        <a
          id="createAccount"
          href="/carlstons-club/register"
          className="text-[14px] leading-[20px] mt-5 link-underline-dark"
        >
          Not registered?
        </a>
      </div>
    </main>
  );
}

export default Login;
