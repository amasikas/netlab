/**
 * Created by saki on 2017/2/23.
 */
import {connect} from 'react-redux'
import XSpider from '../components/index.js'
import {changeSearchKey, search} from '../modules/xspider.js'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChangeResult: (sKey) => {
            dispatch(changeSearchKey(sKey))
        },
        handleClick: ()=>{
            dispatch(search())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("map:");
    console.log(state);
    return {
        searchKey: state.xspider.searchKey
    }

}

const connectXSpider = connect(mapStateToProps, mapDispatchToProps)(XSpider);


export default connectXSpider
