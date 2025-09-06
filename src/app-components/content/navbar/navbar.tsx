// unused , you can use it if you want...

"use client";
import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import User from "../../comp/user-mng/p2/user";
import Login from "../../comp/user-mng/p2/login";
import "./navbar.css";
import UserDropdown from "@/app-components/comp/user-mng/p1/user-dropdown";
import Link from "next/link";


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
    <>
    <div
      className="userDropOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dToggleUserDropdown();
        }
      }}
    ></div>
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
              <Link className='navbarServerLink' href="">Home</Link>
            </li>
            <li>
              <Link className='navbarServerLink' href="">Contact Us</Link>
            </li>
            <li>
              <Link className='navbarServerLink' href="">About</Link>
            </li>
            <li>
              <Link className='navbarServerLink' href="">Features</Link>
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <input className="search" type="search" placeholder="Search..." />
          <button type="submit" className="search-button">
            <Search className="search-b" />
          </button>
        </div>
        <div className="userDrop">
          <UserDropdown
            user={{
              displayname: "Luffy",
              email: "luffy@onepiece.anime",
              username: "",
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
    </>
  );
}
