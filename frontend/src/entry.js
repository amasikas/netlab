/**
 *
 * Created by saki on 2017/2/9.
 */
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './specific/layout'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'));
