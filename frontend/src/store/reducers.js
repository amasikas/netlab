/**
 * Created by saki on 2017/2/21.
 */
import { combineReducers } from 'redux'
import locationReducer from './location'

/*
* 合并各个reducer
* */
export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        ...asyncReducers
    })
}

/*
* 因异步加载新的react js文件，而替换当前的reducer
* */
export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer