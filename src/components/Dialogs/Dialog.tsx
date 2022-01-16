import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}


const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return <div> {props.message}</div>
}


export const Dialogs = () => {

    const ItemArray = [
        {name: 'Seva', id: 1},
        {name: 'Evgenya', id: 2},
        {name: 'Slava', id: 3},
        {name: 'Anya', id: 4},
        {name: 'Sveta', id: 5},
        {name: 'Roman', id: 6}
    ]

    const MessageArray = [
        {message: 'Hi', id: 1},
        {message: 'What you name', id: 2},
        {message: 'Poshel Naher', id: 3},
        {message: 'Ok', id: 4},
    ]

    let dialogsElement = ItemArray.map(d=> <DialogItem name={d.name} id={d.id}/>)
    let messageElement = MessageArray.map(m=> <Message message={m.message} />)

    return (
        <div className={s.dialog}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.dialogMess}>
                {messageElement}
            </div>
        </div>
    )
}