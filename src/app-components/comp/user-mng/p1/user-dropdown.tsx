"use client"
import "./user-dropdown.css";

type UserDropdownProps = {
  user: { displayname: string; email: string; logoutFunc: () => void };
};
const UserDropdown = ({ user }: UserDropdownProps) => {
  return (
    <div className="userDropdown">
      <h3 className="userDisplayname">{user.displayname}</h3>
      <h3 className="userEmail">{user.email}</h3>
      <div className="userOptions">
        <ul>
          <li>
            <a href="/user/profile">Profile</a>
          </li>
          <li>
            <a href="">Continue Watching</a>
          </li>
          <li>
            <a href="">Watch List</a>
          </li>
          <li>
            <a href="">Notification</a>
          </li>
          <li>
            <a href="">Misc</a>
          </li>
          <li>
            <a href="">Setting</a>
          </li>
        </ul>
      </div>
      <h3 className="userLogout" onClick={user.logoutFunc}>Log Out {`->`}</h3>
    </div>
  );
};
export default UserDropdown;
