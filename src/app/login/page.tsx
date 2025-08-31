"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from './page.module.css';
export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <>
    <div className={Styles.testWrapper}>

      <div className={Styles.login}>
        <h1 className={Styles.pageTitle}>Login</h1>
        <div className={Styles.loginDiv}>
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
          <button className={Styles.loginBtn} onClick={onLogin} type="submit">
            Login
          </button>
          <p className={Styles.signupText}>
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
