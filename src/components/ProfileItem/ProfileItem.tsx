import React from "react";
import s from './ProfileItem.module.css'

export const ProfileItem = () => {
    return (
        <div className={s.profileItem}>
            <div className={s.profileImage}>
                <img
                    src="https://cdn.jpegmini.com/user/images/bullet-1-mobile.jpg"
                    alt=""/>
            </div>
            <div className={s.profileDescr}>
                ava+description
            </div>
        </div>
    )
}