"use client";
import Navbar from "@/app-components/content/navbar/navbar";
import CardHolderT1 from "@/app-components/comp/card-mng/t1/card-holder";
import Style from "./style.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ import useParams
import type { User } from "../../../../../../fakedb";

export default function ContinueWatching() {
  const params = useParams();
  const username = params.username; // ✅ get username from URL

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContList() {
      if (!username) return;

      try {
        const res = await fetch(
          `/api/users/${username}/profile/continue-watching` // dynamic URL
        );
        if (!res.ok) throw new Error("Failed to fetch Continue Watching list");
        const data: User = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchContList();
  }, [username]);

  return (
    <div className={Style.profileContinueWatchingBGBox}>
      
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
                    card: user.continueWatching,
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
