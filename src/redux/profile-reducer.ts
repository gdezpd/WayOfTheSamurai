const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
    postsArray: [
        {id: 1, message: 'Hi, how are you?', likeCount: 20},
        {id: 2, message: 'It\'s my first post', likeCount: 5}
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
            }
            state.postsArray.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer;