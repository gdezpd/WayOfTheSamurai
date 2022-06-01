import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileItem} from "../ProfileItem/ProfileItem";
import {StoreType} from "../../redux/store";


type ProfilePropsType = {
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileItem/>
            <MyPosts store={props.store}/>
        </div>
    )
}