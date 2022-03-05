export type PostsArrayType = {    id: number    message: string    likeCount: number}export type ItemArrayType = {    name: string    id: number}export type MessageArrayType = {    message: string,    id: number}type ProfilePageType = {    postsArray: PostsArrayType[]    newPostText: string}type DialogsPageType = {    itemArray: ItemArrayType[],    messageArray: MessageArrayType[]}export type  RootStateType = {    profilePage: ProfilePageType    dialogsPage: DialogsPageType    sidebar: sidebarType}type sidebarType = {}export type stateType = {    profilePage: {        postsArray: PostsArrayType[]        newPostText: string    },    dialogsPage: {        itemArray: ItemArrayType[],        messageArray: MessageArrayType[],    },    sidebar: {}}export type StoreType = {    _state: RootStateType,    // addPost: () => void,    // updateNewPostText: (newText: string) => void,    _callSubckriber: () => void,    subscribe: (observer: () => void) => void,    getState: () => RootStateType,    dispatch: (action: ActionsTypes) => void,}export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>export const addPostAC = (newPostText: string) => {    return {        type: "ADD-POST",        newPostText: newPostText    } as const}export const updateNewPostTextAC = (newText: string) => {    return {        type: "UPDATE-NEW-POST-TEXT",        newText: newText    } as const}export let store: StoreType = {    _state: {        profilePage: {            postsArray: [                {id: 1, message: 'Hi, how are you?', likeCount: 20},                {id: 2, message: 'It\'s my first post', likeCount: 5}            ],            newPostText: 'it-kamasutra'        },        dialogsPage: {            itemArray: [                {name: 'Seva', id: 1},                {name: 'Evgenya', id: 2},                {name: 'Slava', id: 3},                {name: 'Anya', id: 4},                {name: 'Sveta', id: 5},                {name: 'Roman', id: 6}            ],            messageArray: [                {message: 'Hi', id: 1},                {message: 'What you name', id: 2},                {message: 'Poshel Naher', id: 3},                {message: 'Ok', id: 4},            ],        },        sidebar: {}    },    _callSubckriber() {        console.log('State changet')    },    // addPost() {    //     const newPost = {    //         id: 3,    //         message: this._state.profilePage.newPostText,    //         likeCount: 0,    //     }    //     this._state.profilePage.postsArray.push(newPost);    //     this._state.profilePage.newPostText = '';    //     this._callSubckriber();    // },    getState() {        return this._state    },    // updateNewPostText(newText: string) {    //     this._state.profilePage.newPostText = newText    //     this._callSubckriber()    // },    subscribe(observer) {        this._callSubckriber = observer;    },    dispatch(action) {        if (action.type === 'ADD-POST') {            const newPost = {                id: 3,                message: this._state.profilePage.newPostText,                likeCount: 0,            }            this._state.profilePage.postsArray.push(newPost);            this._state.profilePage.newPostText = '';            this._callSubckriber();        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {            this._state.profilePage.newPostText = action.newText            this._callSubckriber()        }    }}