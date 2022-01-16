import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const PostArray=[
        {message: 'Hi, how are you?', likeCount:20},
        {message: 'It`s my first post', likeCount:5}
    ]

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div className={s.post}>
                <Post message={PostArray[0].message} likeCount={PostArray[0].likeCount}/>
                <Post message={PostArray[1].message} likeCount={PostArray[1].likeCount}/>
            </div>
        </div>
    )
}