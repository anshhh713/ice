"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const onSignUp = async () => {};
  return (
    <>
      <h1>Signup</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" required />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="username" required />
        </label>
        <button onClick={onSignUp} type="submit">Signup</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </>
  );
}