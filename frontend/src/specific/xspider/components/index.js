/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';


const XSpider = ({searchKey,handleChangeResult}) => {

    return (
        <div>
            <SearchBar searchKey={searchKey} handleChangeResult={handleChangeResult}/>

            <div>xspider</div>
            <h1>{searchKey}</h1>
        </div>
    )
}


export default XSpider