import "./assets/styles/App.css";
import "./assets/styles/header.css";
import "./assets/styles/footer.css";
import "./assets/styles/home.css";
import "./assets/styles/menu.css";
import "./assets/styles/orderOnline.css";
import "./assets/styles/club.css";
import "./assets/styles/sustainability.css";

import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import Club from "./pages/Club";
import Sustainability from "./pages/Sustainability";

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") || false;
  });

  function getIsLoggedIn(x) {
    localStorage.setItem("isLoggedIn", x);
  }

  const [pathParams, setPathParams] = useState();
  function handlePaths(data) {
    setPathParams(data);
  }

  return (
    <>
      <Router>
        <Header getParams={pathParams} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home passParams={handlePaths} />} />
          <Route path="/about" element={<About passParams={handlePaths} />} />
          <Route
            path="/contact"
            element={<Contact passParams={handlePaths} />}
          />
          <Route path="/menu" element={<Menu passParams={handlePaths} />} />
          <Route
            path="/carlstons-club"
            element={<Club passParams={handlePaths} />}
          />
          <Route
            path="/order-online"
            element={<OrderOnline passParams={handlePaths} />}
          />
          <Route
            path="/sustainability"
            element={<Sustainability passParams={handlePaths} />}
          />
          <Route path="/menu/:id" element={<Menu />} />
          <Route
            path="/order-online/:id"
            element={<OrderOnline passParams={handlePaths} />}
          />
          <Route
            path="/sustainability/:id"
            element={<Sustainability passParams={handlePaths} />}
          />{" "}
          <Route
            path="/carlstons-club/:id"
            element={
              <Club passParams={handlePaths} getIsLoggedIn={getIsLoggedIn} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
