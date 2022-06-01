import {store} from "./redux-store"
import {log} from "util";


const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

// const initialState = store.getState()
// const initialState = {
//     itemArray: [
//         {name: 'Evgenya', id: 2},
//         {name: 'Slava', id: 3},
//         {name: 'Anya', id: 4},
//         {name: 'Sveta', id: 5},
//         {name: 'Roman', id: 6}
//     ],
//     messageArray: [
//         {message: 'Hi', id: 1},
//         {message: 'What you name', id: 2},
//         {message: 'i am number one', id: 3},
//         {message: 'Ok', id: 4},
//     ],
//     newMessage: 'sds'
// }

const dialogsReducer = (state: any = {}, action: any) => {
    console.log(state)
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                message: state.newMessage,
                id: 5
            }
            // state.messageArray.push(newMessage);
            // state.newMessage = '';
            return {...state, messageArray: [...state.messageArray, newMessage]}
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessageText
            return state
        default:
            return state
    }

}

export default dialogsReducer;