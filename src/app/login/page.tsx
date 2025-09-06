"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Styles from './style.module.css';

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Login successful! Redirecting..." });
        setTimeout(() => router.push("/home"), 1500);
      } else {
        setMessage({ type: "error", text: data.error || "Login failed. Try again." });
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Please try later." });
    }
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.loginCard}>
        <h1 className={Styles.title}>Login</h1>

        <form className={Styles.form} onSubmit={onLogin}>
          <label className={Styles.label}>
            Email
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className={Styles.input}
              required
            />
          </label>

          <button className={Styles.button} type="submit">
            Login
          </button>

          {message && (
            <p className={message.type === "success" ? Styles.successMsg : Styles.errorMsg}>
              {message.text}
            </p>
          )}

          <p className={Styles.signup}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
