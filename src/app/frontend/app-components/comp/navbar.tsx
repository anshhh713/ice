import type { FC } from "react";

import Image from "next/image";
import { Search } from "lucide-react";
import "./navbar.css";
import User from "./user-mng/user";
const Navbar: FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-bar">
           <Image src="/ice.svg" alt="ICE Logo" width={32} height={32} className="logo" />
          <h2>ICE</h2>
        </div>
        <div className="placehold">
          <ul>
            <li>
              <a href="" className="placeholde">
                Home
              </a>
            </li>
            <li>
              <a href="" className="placeholde">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="placeholde">
                About
              </a>
            </li>
            <li>
              <a href="" className="placeholde">
                Features
              </a>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          <input className="search" type="search" placeholder="Search..." />
          <button type="submit" className="search-button">
            <Search className="search-b" />
          </button>
        </div>
        <User dn="Jhon Cena" dp="/jhoncena.jpg" />
      </nav>
    </>
  );
};
export default Navbar;
