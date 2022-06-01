import s from "./Navbar.module.css";
import React from "react";

type AllFriendsPropsType = {
    name: string
}
export const AllFriends = (props: AllFriendsPropsType) => {
    return (
        <div className={s.wrapperFriends}>
            <div className={s.ava}> </div>
            <div className={s.descr}>{props.name}</div>
        </div>
    )
}