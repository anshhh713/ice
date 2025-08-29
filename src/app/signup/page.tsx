"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from './style.module.css';
export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignUp = async () => {};
  return (
    <>
      <div className={Styles.signup}>
        <h1>Signup</h1>
        <form className={Styles.form}>
          <label className={Styles.label}>
            Email:
            <input className={Styles.input}
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              required
            />
          </label>
          <label className={Styles.label}>
            Password:
            <input className={Styles.input}
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              required
            />
          </label>
          <label className={Styles.label}>
            Username:
            <input className={Styles.input}
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              required
            />
          </label>
          <button onClick={onSignUp} type="submit">
            Signup
          </button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
}
