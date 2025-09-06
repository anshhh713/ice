// navbar-server.tsx
import '../navbar.css'
import Image from "next/image";
import NavbarUserProfile from "../userSide/navbarUserSide"; // client component
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function NavbarServer({ user }: { user?: any }) {
  return (
    <nav className="navbar">
      <div className="logo-bar">
        <Image src="/ice.svg" alt="ICE Logo" width={32} height={32} className="logo" />
        <h2>ICE</h2>
      </div>

      <div className="placehold">
        <ul>
          <li><Link className='navbarServerLink' href="/home">Home</Link></li>
          <li><Link className='navbarServerLink' href="">Contact Us</Link></li>
          <li><Link className='navbarServerLink' href="">About</Link></li>
          <li><Link className='navbarServerLink' href="">Features</Link></li>
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
