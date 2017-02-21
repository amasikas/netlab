/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';
import SearchBar from './components/SearchBar';


class XSpider extends Component{
    constructor(props){
       super(props);
       this.state = {
           results: []
       };
        this.handleChildChangeResult = this.handleChildChangeResult.bind(this);
    }

    handleChildChangeResult(results){

        let buffer = this.state.results;
        buffer.push(results);
        this.setState({
            results: buffer
        });
    }

    render(){
        return(
            <div>
                <SearchBar searchKey={this.state.searchKey} handleChildChangeResult={this.handleChildChangeResult}/>
                <div>xspider</div>
                <h1>Parents{this.state.results}</h1>
            </div>
        )
    }
}


export default XSpider