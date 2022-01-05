import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <Post message={'Hi, how are you?'} likeCount={'20'}/>
            <Post message={'It`s my first post'} likeCount={'25'}/>
        </div>
    )
}