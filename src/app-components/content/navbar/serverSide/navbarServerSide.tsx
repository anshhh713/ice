// navbar-server.tsx
import '../navbar.css'
import Image from "next/image";
import NavbarUserProfile from "../userSide/navbarUserSide"; // client component
import { Search } from 'lucide-react';

export default function NavbarServer({ user }: { user?: any }) {
  return (
    <nav className="navbar">
      <div className="logo-bar">
        <Image src="/ice.svg" alt="ICE Logo" width={32} height={32} className="logo" />
        <h2>ICE</h2>
      </div>

      <div className="placehold">
        <ul>
          <li><a href="/home">Home</a></li>
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

      {/* Client component for interactive user part */}
      <NavbarUserProfile user={user} />
    </nav>
  );
}
