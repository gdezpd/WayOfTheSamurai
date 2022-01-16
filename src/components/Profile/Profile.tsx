import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileItem} from "../ProfileItem/ProfileItem";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileItem/>
            <MyPosts/>
        </div>
    )
}