import './user.css';
import type { FC } from 'react';
type UserProps ={
    dn:string;
    dp: string;
}

const User: FC<UserProps> = (props) => {
    return (
        <div className="user-bar">
            <h3 className={"user-dn"} >{props.dn}</h3>
            <img src={props.dp}alt="user-icon" className={"user-dp"} />
        </div>
    )
}
export default User;