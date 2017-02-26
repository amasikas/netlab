/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';

class SakiButton extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.handleClick(event.target.value);
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.props.children}</button>
        )
    }
}

export default SakiButton