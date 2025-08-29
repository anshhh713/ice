"use client";
import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import User from "./user-mng/user";
import Login from "./user-mng/login";
import "./navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-bar">
        <Image src="/ice.svg" alt="ICE Logo" width={32} height={32} className="logo" />
        <h2>ICE</h2>
      </div>

      <div className="placehold">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Features</a></li>
        </ul>
      </div>

      <div className="search-bar">
        <input className="search" type="search" placeholder="Search..." />
        <button type="submit" className="search-button">
          <Search className="search-b" />
        </button>
      </div>

      {isLoggedIn ? (
        <User dn="John Cena" dp="/jhoncena.jpg" />
      ) : (
        <Login oc={() => setIsLoggedIn(true)} />
      )}
    </nav>
  );
}
