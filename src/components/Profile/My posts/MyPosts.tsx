import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {addPostAC, PostsArrayType, updateNewPostTextAC} from "../../../redux/state";
import {Post} from "./Post/Post";

type PostArrayPropsType = {
    postsArray: Array<PostsArrayType>
    newPostText:string
}

export const MyPosts = (props: PostArrayPropsType) => {

    let postElements = props.postsArray.map(el => <Post message={el.message} likeCount={el.likeCount}/>)
    let addPostHandler = () => {
        // props.addPost()
        addPostAC(props.newPostText)
    }

    const newPostElement = useRef<any>(null)

    const onChangeHandler =( )=>{
        const textInput = newPostElement.current.value
        // props.updateNewPostText(textInput)
        updateNewPostTextAC(textInput)
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onChangeHandler}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Add</button>
            </div>
            <div className={s.post}>
                {postElements}
                {/*<Post message={postsArray.message} likeCount={postsArray.likeCount}/>*/}
                {/*<Post message={postsArray.message} likeCount={postsArray.likeCount}/>*/}
            </div>
        </div>
    )
}