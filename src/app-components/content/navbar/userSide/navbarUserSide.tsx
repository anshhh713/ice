// navbar-user-profile.tsx
"use client";
import "../navbar.css";
import { useState, useEffect } from "react";
import User from "../../../comp/user-mng/p2/user";
import Login from "../../../comp/user-mng/p2/login";
import UserDropdown from "@/app-components/comp/user-mng/p1/user-dropdown";

export default function NavbarUserProfile() {
  const [user, setUser] = useState<any>(null);

  // Load user from server on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/users/me");
        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

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

  const logout = async () => {
    await fetch("/api/users/logout", { method: "POST" });
    setUser(null); // clear local state
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
        {user && (
          <UserDropdown
            user={{
              displayname: user.displayName,
              email: user.email,
              username: user.username,
              logoutFunc: logout,
            }}
          />
        )}
      </div>

      <div className="userprofile">
        {user ? (
          <User dn={user.displayName} dp={user.dp || "/default.jpg"} mode={1} f={toggleDropdown} />
        ) : (
          <Login oc={() => window.location.href = "/login"} />
        )}
      </div>
    </>
  );
}
