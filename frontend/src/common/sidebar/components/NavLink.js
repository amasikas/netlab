/**
 * Created by saki on 2017/2/10.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeStyle={{ color: 'red' }}/>
    }
})