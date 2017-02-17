/**
 * Created by saki on 2017/2/17.
 */
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from '../specific/App'

const test = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../common/test').default)
    }, 'test')
}

const  xspider = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../specific/xspider').default)
    }, 'xspider')
}

const RouterConfig = (
    <Router history={hashHistory}>

        <Route path="/" component={App}>
            <Route path="test" getComponent={test}/> //测试
            <Route path="xspider" getComponent={xspider} /> //爬虫系列
        </Route>

    </Router>
)

export default RouterConfig