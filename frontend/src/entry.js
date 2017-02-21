/**
 *
 * Created by saki on 2017/2/9.
 */
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import route from './router/index'; //路由配置
import createStore from './store/createStore';

/*
* 配置安装store
* */
const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

render(
    <Provider store={store}>
        (route)
    </Provider>
, document.getElementById('app'));

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
    if (window.devToolsExtension) {
        window.devToolsExtension.open()
    }
}