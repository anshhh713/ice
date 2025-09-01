"use client"
import Navbar from "@/app-components/content/navbar/navbar";
import { useState, useEffect } from "react"

type User = { username: string; email: string }

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/users/profile")
      if (res.ok) {
        setUser(await res.json())
      }
    }
    fetchUser()
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <div>
      <Navbar />
      <h1>Your Profile</h1>
      <p>Welcome, {user.username}!</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
