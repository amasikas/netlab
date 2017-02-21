/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchKey: "",
            searchTarget: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({
            searchKey: event.target.value
        });

        this.props.handleChildChangeResult(event.target.value);
    }


    render(){
        return(
            <div>
                <input type="text" value={this.props.searchKey} onChange={this.handleInputChange}/>
                <div>{this.state.searchKey}</div>
            </div>
        )
    }
}

export default SearchBar