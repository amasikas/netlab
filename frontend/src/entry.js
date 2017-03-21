/**
 *
 * Created by saki on 2017/2/9.
 */
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store/createStore';

/*
* 配置安装store
* */
const initialState = window.__INITIAL_STATE__;
const DEV = __DEV__;


const store = createStore(initialState);
const route = require("./router/index").default(store);
render(
    <Provider store={store}>
        {route}
    </Provider>
, document.getElementById('app'));


// ========================================================
// Developer Tools Setup
// ========================================================
