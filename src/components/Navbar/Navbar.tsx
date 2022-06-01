import React from "react";
import {NavLink} from "react-router-dom";
import { AllFriends } from "./AllFriends";
import s from './Navbar.module.css';

type isActiveType = {
    isActive: boolean
}

export const Navbar = () => {

    const activeLink = ({isActive}: isActiveType) => isActive ? s.active : s.item;

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/' className={activeLink}> Profile</NavLink>
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
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.container}>
                    <AllFriends
                        name={'Joe'}
                    />
                    <AllFriends
                        name={'Piter'}
                    />
                    <AllFriends
                        name={'Helena'}
                    />
                </div>
            </div>
        </nav>
    )
}


