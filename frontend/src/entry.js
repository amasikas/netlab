/**
 *
 * Created by saki on 2017/2/9.
 */
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import route from './router/index'; //路由配置


render((route)
, document.getElementById('app'));
