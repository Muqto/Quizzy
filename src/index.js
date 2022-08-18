import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { QuizBank } from './reducers/QuizBank';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(QuizBank, compose(applyMiddleware(thunk)))
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);


