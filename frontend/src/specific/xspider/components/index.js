/**
 * Created by saki on 2017/2/17.
 */
import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import SakiButton from '../../../components/button';

const XSpider = ({searchKey,handleChangeResult, handleClick}) => {

    return (
        <div>
            <SearchBar searchKey={searchKey} handleChangeResult={handleChangeResult}/>
            <SakiButton handleClick={handleClick}>搜索</SakiButton>
            <div>xspider</div>
            <h1>{searchKey}</h1>
        </div>
    )
}


export default XSpider