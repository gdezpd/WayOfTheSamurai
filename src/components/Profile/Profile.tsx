import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileItem} from "../ProfileItem/ProfileItem";
import {ActionsTypes, PostsArrayType} from "../../redux/state";


type ProfilePropsType = {
    postsArray: Array<PostsArrayType>
    newPostText:string
    dispatch: (action: ActionsTypes)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileItem/>
            <MyPosts postsArray={props.postsArray}
                     newPostText={props.newPostText} />
        </div>
    )
}