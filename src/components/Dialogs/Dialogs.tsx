import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ItemArrayType, MessageArrayType} from "../../redux/state";


type propsType = {
        itemArray: Array<ItemArrayType>
        messageArray: Array<MessageArrayType>
}


export const Dialogs = (props: propsType) => {

    let dialogsElement = props.itemArray.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messageArray.map(m => <Message message={m.message}/>)

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