"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from "./style.module.css";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [message, setMessage] = React.useState("");

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/(auth)/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setMessage(data.error || "Signup failed. Try again.");
      }
    } catch (err) {
      setMessage("Something went wrong. Please try later.");
    }
  };

  return (
    <div className={Styles.wrapperSignup}>
      <div className={Styles.signup}>
        <h1 className={Styles.pageTitleSignup}>Signup</h1>
        <form className={Styles.divSignup} onSubmit={onSignUp}>
          <label className={Styles.labelSignup}>
            Username:
            <input
              className={Styles.inputSignup}
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              required
            />
          </label>
          <label className={Styles.labelSignup}>
            Email:
            <input
              className={Styles.inputSignup}
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              required
            />
          </label>
          <label className={Styles.labelSignup}>
            Password:
            <input
              className={Styles.inputSignup}
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              required
            />
          </label>
          <button className={Styles.signupBtn} type="submit">
            Signup
          </button>
          {message && <p>{message}</p>}
          <p className={Styles.loginText}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
