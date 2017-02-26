/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.handleChangeResult = this.handleChangeResult.bind(this);
    }

    handleChangeResult(event){
        console.log("input change");
        console.log(event.target.value);
        this.props.handleChangeResult(event.target.value);
    }

    render(){
        return(
            <div>
                <input type="text" value={this.props.searchKey} onChange={this.handleChangeResult}/>
            </div>
        )
    }
}

export default SearchBar