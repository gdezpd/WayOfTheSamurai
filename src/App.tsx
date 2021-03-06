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
import {StoreType} from "./redux/store";
import {store} from './redux/store';

// type AppPropsType = {
//     state: StoreType
// }

export const App = () => {
    // const state = store.getState()
    // console.log(state)
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/" element={<Profile store={store}/>}/>
                    <Route path="/dialogs" element={<Dialogs itemArray={store._state.dialogsPage.itemArray}
                                                             messageArray={store._state.dialogsPage.messageArray}
                                                             newMessage={store._state.dialogsPage.newMessage}
                                                             dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}
