"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from './style.module.css';
export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <>
      <div className={Styles.login}>
        <h1>Login</h1>
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
          <button onClick={onLogin} type="submit">
            Login
          </button>
          <p>
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </form>
      </div>
    </>
  );
}
