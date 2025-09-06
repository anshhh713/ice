"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Styles from "./style.module.css";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Signup successful! Redirecting..." });
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setMessage({ type: "error", text: data.error || "Signup failed. Try again." });
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Please try later." });
    }
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.card}>
        <h1 className={Styles.title}>Signup</h1>

        <form className={Styles.form} onSubmit={onSignUp}>
          <label className={Styles.label}>
            Username
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter username"
              className={Styles.input}
              required
            />
          </label>

          <label className={Styles.label}>
            Email
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email"
              className={Styles.input}
              required
            />
          </label>

          <label className={Styles.label}>
            Password
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter password"
              className={Styles.input}
              required
            />
          </label>

          <button className={Styles.button} type="submit">
            Signup
          </button>

          {message && (
            <p className={message.type === "error" ? Styles.errorMsg : Styles.successMsg}>
              {message.text}
            </p>
          )}

          <p className={Styles.loginText}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
