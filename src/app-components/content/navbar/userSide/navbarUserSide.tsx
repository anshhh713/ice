// navbar-user-profile.tsx
"use client";
import '../navbar.css'
import { use, useState } from "react";
import User from "../../../comp/user-mng/p2/user";
import Login from "../../../comp/user-mng/p2/login";
import UserDropdown from "@/app-components/comp/user-mng/p1/user-dropdown";

export default function NavbarUserProfile({ user }: { user?: any }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const toggleDropdown = () => {
    const el = document.querySelector<HTMLElement>(".userDropdown");
    const e2 = document.querySelector<HTMLElement>(".userDropOverlay");
    if (el && e2) {
      el.style.display = "block";
      e2.style.display = "block";
    }
  };
  const closeDropdown = () => {
    const el = document.querySelector<HTMLElement>(".userDropdown");
    const e2 = document.querySelector<HTMLElement>(".userDropOverlay");
    if (el && e2) {
      el.style.display = "none";
      e2.style.display = "none";
    }
  };

  return (
    <>
      <div
        className="userDropOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDropdown();
        }}
      ></div>

      <div className="userDrop">
        {isLoggedIn && user && (
          <UserDropdown
            user={{
              displayname: user.displayName,
              email: user.email,
              username: user.username,
              logoutFunc: () => setIsLoggedIn(false),
            }}
          />
        )}
      </div>

      <div className="userprofile">
        {isLoggedIn && user ? (
          <User dn={user.displayName} dp={user.dp || "/default.jpg"} mode={1} f={toggleDropdown} />
        ) : (
          <Login oc={() => setIsLoggedIn(true)} />
        )}
      </div>
    </>
  );
}
