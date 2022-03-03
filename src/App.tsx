import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import { ItemArrayType, MessageArrayType, PostsArrayType} from "./redux/state";

type appPropsType = {
    state: {
        profilePage: {
            postsArray: Array<PostsArrayType>
            newPostText:string
        }
        dialogsPage: {
            itemArray: Array<ItemArrayType>
            messageArray: Array<MessageArrayType>
        }
        sidebar:{}
    }
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}

export const App = (props: appPropsType) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs itemArray={props.state.dialogsPage.itemArray}
                                                                 messageArray={props.state.dialogsPage.messageArray}/>}/>
                        <Route path="/profile" element={<Profile postsArray={props.state.profilePage.postsArray}
                                                                 newPostText={props.state.profilePage.newPostText}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText} />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    )
}
