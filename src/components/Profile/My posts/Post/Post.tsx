import React from "react";
import s from './Post.module.css'

type propsType = {
    message:string
    likeCount:number
}

export const Post = (props:propsType) => {

    return (
        <div className={s.wrapper}>
            <div className={s.post}>
                <div className={s.avatar}>
                    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    />
                </div>
                <div className={s.item}>
                    {props.message}
                </div>
            </div>
            <div className={s.likes}>
                Likes {props.likeCount}
            </div>
        </div>
    )
}