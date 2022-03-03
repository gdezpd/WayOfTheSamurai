const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type MessageType = {
  id: number
  message: string
}
export type DialogType = {
  id: number
  name: string
}
export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}
export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}
export type FriendsType = {
  id: number
  name: string
}
export type SidebarType = {
  friends: Array<FriendsType>
}
export type RootStoreType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}
export type StoreType = {
  _state: RootStoreType
  _callSubscriber: (state: RootStoreType) => void
  subscribe: (observer: (state: RootStoreType) => void) => void
  getState: () => RootStoreType
  dispatch: (action: ActionsType) => void
}

export type ActionsType =
  ReturnType<typeof addPostActionCreator> |
  ReturnType<typeof updateNewPostTextActionCreator> |
  ReturnType<typeof updateNewMessageBodyCreator> |
  ReturnType<typeof sendMessageCreator>

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 14 }
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Sergey' },
        { id: 4, name: 'Juriy' },
        { id: 5, name: 'Bonifacij' },
        { id: 6, name: 'Sasha' },
        { id: 7, name: 'Tolya' }
      ],
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Good by' },
        { id: 4, message: 'IT' },
        { id: 5, message: 'How are you' },
        { id: 6, message: 'What is your name?' },
        { id: 7, message: 'I am dont now' }
      ],
      newMessageBody: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Vasya' },
        { id: 2, name: 'Grisha' },
        { id: 3, name: 'Pasha' }
      ]
    },
  },
  // addPost() {
  //   const newPost: PostType = {
  //     id: new Date().getTime(),
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   }
  //   this._state.profilePage.posts.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //   this._callSubscriber(this._state)
  // },
  // onPostChange(newPost: string) {
  //   this._state.profilePage.newPostText = newPost;
  //   this._callSubscriber(this._state)
  // },
  _callSubscriber(state: RootStoreType) {
    console.log('hello');
  },
  subscribe(observer: (state: RootStoreType) => void) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {// { type: 'ADD_POST' }
    if (action.type === ADD_POST) {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST } as const);
export const updateNewPostTextActionCreator = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText } as const);

export const updateNewMessageBodyCreator = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const);
export const sendMessageCreator = () => ({ type: SEND_MESSAGE } as const);


export default store;
//@ts-ignore
window.store = store;