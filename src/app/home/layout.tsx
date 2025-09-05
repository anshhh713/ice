// layout.tsx (server component)

import NavbarServer from "@/app-components/content/navbar/serverSide/navbarServerSide";

import { users, type User } from "../../../fakedb";



// Example: fetch the currently "logged in" user from fake DB
const currentUser: User | undefined = users.find(u => u.username === "test1");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarServer user={currentUser} />
      <main>{children}</main>
    </>
  );
}
