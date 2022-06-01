import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ItemArrayType, MessageArrayType} from "../../redux/store";
import {ActionsTypes, addMessageAC, updateNewMessageTextAC,} from "../../redux/ActionCreator";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";


type propsType = {
    itemArray: Array<ItemArrayType>
    messageArray: Array<MessageArrayType>
    newMessage: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: propsType) => {
    const inputNewText = useSelector<AppRootStateType, string>(state => state.dialogsPage.newMessage)
    const arrayMessages = useSelector<AppRootStateType, MessageArrayType[]>(state => state.dialogsPage.messageArray)

    let dialogsElement = props.itemArray.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.messageArray.map(m => <Message key={m.id} message={m.message}/>)

    const sendMessageButtonHandler = () => {
        props.dispatch(addMessageAC(props.newMessage))
        console.log(arrayMessages)
    }
    const onChangeInputMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
        console.log(e.currentTarget.value)
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
                        <input
                            value={inputNewText}
                            onChange={onChangeInputMessageHandler}
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