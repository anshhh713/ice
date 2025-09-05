"use client"
import "./user-dropdown.css";
import Link from "next/link";

type UserDropdownProps = {
  user: { displayname: string; email: string; username:string; logoutFunc: () => void };
};
const UserDropdown = ({ user }: UserDropdownProps) => {
  return (
    <div className="userDropdown">
      <h3 className="userDisplayname">{user.displayname}</h3>
      <h3 className="userEmail">{user.email}</h3>
      <div className="userOptions">
        <ul>
          <li>
            <Link className="l" href={`/user/${user.username}/profile`}>Profile</Link>
          </li>
          <li>
            <Link className="l" href={`/user/${user.username}/profile/continue-watching`}>Continue Watching</Link>
          </li>
          <li>
            <Link className="l" href={`/user/${user.username}/profile/watch-list`}>Watch List</Link>
          </li>
          <li>
            <Link className="l" href={``}>Notification</Link>
          </li>
          <li>
            <Link className="l" href={``}>Misc</Link>
          </li>
          <li>
            <Link className="l" href={``}>Setting</Link>
          </li>
        </ul>
      </div>
      <h3 className="userLogout" onClick={user.logoutFunc}>Log Out {`->`}</h3>
    </div>
  );
};
export default UserDropdown;
