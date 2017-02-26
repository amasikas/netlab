/**
 * Created by saki on 2017/2/22.
 */
import 'whatwg-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const XSPIDER_SEARCH = 'XSPIDER_SEARCH';
export const XSPIDER_CHANGE_SEARCH_KEY = 'XSPIDER_CHANGE_SITE';

export const search = () => {
    return (dispatch, getState) => {


        return new Promise((resolve) => {
            let url = '/search';
            fetch('/lab/api/search', {
                method: 'GET',
                body: {
                    searchKey: getState().searchKey
                }
            }).then(function (response) {
                dispatch({
                    type: XSPIDER_SEARCH,
                    results: [1, 2, 3, 4]
                });
                resolve();
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });
        })
    }
}

export const changeSearchKey = (sKey) => {
    return {
        "type": XSPIDER_CHANGE_SEARCH_KEY,
        "searchKey": sKey
    }
}
export const actions = {
    search,
    changeSearchKey
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [XSPIDER_SEARCH]: (state, action) => {
        return Object.assign({}, state, {
            results: action.results
        })
    },
    [XSPIDER_CHANGE_SEARCH_KEY]: (state, action) => {
        return Object.assign({}, state, {
            searchKey: action.searchKey
        })
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
let initialState = {
    searchKey: "",
    results: []
};
export default function xspiderReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
