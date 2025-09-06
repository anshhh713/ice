"use client";
import Navbar from "@/app-components/content/navbar/navbar";
import { useState, useEffect } from "react";
import Style from "./style.module.css";

type User = { username: string; email: string };

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/users/profile");
        if (!res.ok) throw new Error("Failed to fetch user");
        const data: User = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found or not logged in</p>;

  return (
    <div className={Style.profileBGBox}>
      
      <div className={Style.profileContent}>
        <div className={Style.profileContentBox}>
          <h1>Your Profile</h1>
          <p className={Style.profileDetails}>
            Welcome, <span>{user.username}</span>
          </p>
          <p className={Style.profileDetails}>
            Email: <span>{user.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
