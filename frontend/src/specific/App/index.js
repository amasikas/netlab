/**
 * Created by saki on 2017/2/14.
 */
import React, {Component, PropTypes} from 'react';
import SideBar from '../../common/sidebar';

class Main extends Component{
    render(){
        return(
            <div>
                <SideBar />
                <div>infos</div>
                {this.props.children}
            </div>
        )
    }
}


export default Main