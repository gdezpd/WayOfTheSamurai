import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';
import {RootStateType, StoreType} from './redux/store';
// import {RootStateType} from './redux/store';

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

export let renderReactElement = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter >
                <Provider store={store}>
                    <App/>
                </Provider>

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderReactElement(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderReactElement(state);
})
// store._callSubscriber()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
