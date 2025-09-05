import NavbarServer from "@/app-components/content/navbar/serverSide/navbarServerSide";
import { users, type User } from "@/../fakedb";
const currentUser: User | undefined = users.find(u => u.username === "test1");
export default function TestT5(){
    return <NavbarServer user={currentUser} />
}