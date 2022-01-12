import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

type isActiveType = {
    isActive:boolean
}

export const Navbar = () => {

    const activeLink=({isActive}:isActiveType)=> isActive ? s.active :s.item;

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={activeLink}> Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={activeLink}> Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={activeLink}> News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={activeLink}> Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={activeLink}> Settings</NavLink>
            </div>
        </nav>
    )
}
