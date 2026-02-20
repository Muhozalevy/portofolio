import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Lévy Michel</h2>
        <div className={`navbar-links ${open ? "open" : ""}`}>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </nav>
  );
}