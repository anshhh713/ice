"use client";
import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import User from "../../comp/user-mng/user";
import Login from "../../comp/user-mng/login";
import "./navbar.css";
import UserDropdown from "@/app-components/comp/user-mng/p1/user-dropdown";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ToggleUserDropdown = () => {
    const el = document.querySelector<HTMLElement>(".userDropdown");
    const e2 = document.querySelector<HTMLElement>(".userDropOverlay");
    if (el) el.style.display = "block";
    if (e2) e2.style.display = "block";
  };
  const dToggleUserDropdown = () => {
    const el = document.querySelector<HTMLElement>(".userDropdown");
    const e2 = document.querySelector<HTMLElement>(".userDropOverlay");
    if (el) el.style.display = "none";
    if (e2) e2.style.display = "none";
  };

  return (
    <nav className="navbar">
      <div className="logo-bar">
        <Image
          src="/ice.svg"
          alt="ICE Logo"
          width={32}
          height={32}
          className="logo"
        />
        <h2>ICE</h2>
      </div>

      <div className="placehold">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
        </ul>
      </div>

      <div className="search-bar">
        <input className="search" type="search" placeholder="Search..." />
        <button type="submit" className="search-button">
          <Search className="search-b" />
        </button>
      </div>
      <div className="userDropOverlay" onClick={dToggleUserDropdown}></div>
      <div className="userDrop">
        <UserDropdown
          user={{
            displayname: "Luffy",
            email: "luffy@onepiece.anime",
            logoutFunc: () => {},
          }}
        />
      </div>
      <div className="userprofile">
        {isLoggedIn ? (
          <>
            <User
              dn="John Cena"
              dp="/jhoncena.jpg"
              mode={1}
              f={ToggleUserDropdown}
            />
          </>
        ) : (
          <Login oc={() => setIsLoggedIn(true)} />
        )}
      </div>
    </nav>
  );
}
