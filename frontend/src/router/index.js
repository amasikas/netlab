/**
 * Created by saki on 2017/2/17.
 */
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {injectReducer} from '../store/reducers'

import App from '../specific/App'

const test = (store) => {
    return (location, cb) => {
        require.ensure([], require => {
            cb(null, require('../common/test').default)
        }, 'test')
    }
}


const xspider = (store) => {
    return (location, cb) => {
        require.ensure([], require => {
            const Xspider = require('../specific/xspider/containers/XSpiderContainer.js').default;

            const reducer = require('../specific/xspider/modules/xspider.js').default;

            injectReducer(store, {key: 'xspider', reducer});
            cb(null, Xspider)
        }, 'xspider')
    }
}

const RouterConfig = (store) => {
    const comTest = test(store);
    const comXSpider = xspider(store);
    return (
        <Router history={hashHistory}>

            <Route path="/" component={App}>
                <Route path="test" getComponent={comTest}/> //测试
                <Route path="xspider" getComponent={comXSpider}/> //爬虫系列
            </Route>

        </Router>
    )
}
export default RouterConfig