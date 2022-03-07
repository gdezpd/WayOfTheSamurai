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
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

export const App = (props: AppPropsType) => {
    // const state = store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs itemArray={props.store._state.dialogsPage.itemArray}
                                                             messageArray={props.store._state.dialogsPage.messageArray}
                                                             newMessage={props.store._state.dialogsPage.newMessage}
                                                             dispatch ={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/profile" element={<Profile store={props.store}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}
