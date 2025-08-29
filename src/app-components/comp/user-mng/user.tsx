import "./user.css";

type UserProps = {
  dn: string;
  dp: string;
};

export default function User({ dn, dp }: UserProps) {
  return (
    <div className="user-bar">
      <h3 className="user-dn">{dn}</h3>
      <img src={dp} alt={`${dn}-icon`} className="user-dp" />
    </div>
  );
}
