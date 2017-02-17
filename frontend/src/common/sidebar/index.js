/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';
import NavLink from './components/NavLink';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <h1>Reactl</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>首页</NavLink></li>
                    <li><NavLink to="/test">Test</NavLink></li>
                    <li><NavLink to="/xspider">爬虫系列</NavLink></li>
                </ul>
            </div>
        )
    }

}


export default Sidebar