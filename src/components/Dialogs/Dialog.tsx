import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message:string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message =(props:MessageType)=> {
    return <div> {props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialog}>
            <div className={s.dialogItem}>
                <DialogItem name='Seva' id={1}/>
                <DialogItem name='Evgenya' id={2}/>
                <DialogItem name='Slava' id={3}/>
                <DialogItem name='Anya' id={4}/>
                <DialogItem name='Sveta' id={5}/>
                <DialogItem name='Roman' id={6}/>
            </div>
            <div className={s.dialogMess}>
                <Message message='Hi' />
                <Message message='What you name' />
                <Message message='Poshel Naher' />
                <Message message='Ok' />
            </div>
        </div>
    )
}