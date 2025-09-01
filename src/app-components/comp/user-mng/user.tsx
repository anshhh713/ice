import "./user.css";
import Image from "next/image";
const l = "light";
const d = "dark";
type UserProps = {
  dn: string;
  dp: string;
  mode: 0 | 1;
  f: () => void
};

export default function User({ dn, dp, mode, f }: UserProps) {
  return (
    <div className="user-bar">
      <h3 className="user-dn">{dn}</h3>
      <Image src={mode === 0 ? `/bell-${l}.svg` : `/bell-${d}.svg`} width={20} height={20} alt="notification-icon" className="notify-icon" />
      <Image src={dp} alt={`${dn}-icon`} onClick={f} className="user-dp" width={40} height={40} />
    </div>
  );
}
