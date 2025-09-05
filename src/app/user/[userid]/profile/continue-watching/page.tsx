"use client";
//src/app/user/profile/continue-watching/page.tsx
import Navbar from "@/app-components/content/navbar/navbar";
import CardHolderT1 from "@/app-components/comp/card-mng/t1/card-holder";
import Style from "./style.module.css";
import { useEffect, useState } from "react";
import type { User } from "../../../../../../fakedb";

export default function ContinueWatching() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContList() {
      try {
        const res = await fetch(
          `/api/users/profile/continue-watching?username=test2`
        ); // ✅ pass username
        if (!res.ok) throw new Error("Failed to fetch Continue Watching list");
        const data = await res.json();
        setUser(data); // data = { success, username, continueWatching }
      } catch (error) {
        console.error(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchContList();
  }, []);

  return (
    <div className={Style.profileContinueWatchingBGBox}>
      <Navbar />
      <div className={Style.profileContinueWatchingContent}>
        <div className={Style.profileContinueWatchingContentBox}>
          <h3>Continue Watching</h3>
          <div className={Style.profileContinueWatchingCardBox}>
            {loading ? (
              <p>Loading...</p>
            ) : user ? (
              <CardHolderT1
                card={[
                  {
                    filter: "",
                    card: user.continueWatching, // ✅ use fakedb data
                  },
                ]}
              />
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
