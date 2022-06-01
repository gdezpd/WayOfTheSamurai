import React, {useRef} from "react";
import s from './MyPosts.module.css'
import { StoreType } from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ActionCreator";
import {Post} from "./Post/Post";

type PostArrayPropsType = {
    store: StoreType
}

export const MyPosts = (props: PostArrayPropsType) => {

    let postElements = props.store._state.profilePage.postsArray.map(el => <Post message={el.message} likeCount={el.likeCount}/>)
    let addPostHandler = () => {
        props.store.dispatch(addPostAC(props.store._state.profilePage.newPostText))
    }

    const newPostElement = useRef<any>(null)

    const onChangeHandler = () => {
        const textInput = newPostElement.current.value
        props.store.dispatch(updateNewPostTextAC(textInput))
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.store._state.profilePage.newPostText} onChange={onChangeHandler}/>
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