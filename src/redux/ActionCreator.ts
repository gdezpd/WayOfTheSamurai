
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const addMessageAC = (newMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessage: newMessage
    } as const
}
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const
}