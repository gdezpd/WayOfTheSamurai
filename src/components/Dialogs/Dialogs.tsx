import React, {useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes, addMessageAC,
    ItemArrayType,
    MessageArrayType,
    updateNewMessageTextAC,
} from "../../redux/state";


type propsType = {
    itemArray: Array<ItemArrayType>
    messageArray: Array<MessageArrayType>
    newMessage: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: propsType) => {

    let dialogsElement = props.itemArray.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messageArray.map(m => <Message message={m.message}/>)
    const sendMessageButtonHandler = () => {
        props.dispatch(addMessageAC(props.newMessage))
    }
    const newMessage = useRef<any>(null)
    const onChangeInputMessageHandler = () => {
        const newMessageText = newMessage.current.value
            props.dispatch(updateNewMessageTextAC(newMessageText))
    }

    return (
        <div className={s.dialog}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.dialogMess}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea ref={newMessage} value={props.newMessage} onChange={onChangeInputMessageHandler}
                        placeholder={'Enter you message'}/>
                    </div>
                    <div>
                        <button onClick={sendMessageButtonHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}