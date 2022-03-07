import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileItem} from "../ProfileItem/ProfileItem";
import {ActionsTypes, PostsArrayType, StoreType} from "../../redux/state";


type ProfilePropsType = {
    store: StoreType
    // postsArray: Array<PostsArrayType>
    // newPostText:string
    // dispatch: (action: ActionsTypes)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileItem/>
            <MyPosts store={props.store} />
        </div>
    )
}