import React from "react";
import classes from './Post.module.css'

type propsType = {
    message:string
    likeCount:number
}

export const Post = (props:propsType) => {

    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                     alt=""/>
            </div>
            <div className={classes.item}>
                {props.message}
            </div>
            <div className={classes.likes}>
                <span>Likes {props.likeCount}</span>
            </div>
        </div>
    )
}