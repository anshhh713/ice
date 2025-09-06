"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app-components/content/navbar/navbar";

export default function UserProfile({ params }: { params: { username: string } }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${params.username}/profile`);
      const data = await res.json();
      setUser(data.user);
    }
    fetchUser();
  }, [params.username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      
      <h1>{user.username}'s Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
