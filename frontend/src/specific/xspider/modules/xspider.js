/**
 * Created by saki on 2017/2/22.
 */

// ------------------------------------
// Constants
// ------------------------------------
export const XSPIDER_SEARCH = 'XSPIDER_SEARCH';
export const XSPIDER_CHANGE_SEARCH_KEY = 'XSPIDER_CHANGE_SITE';

export const search = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: XSPIDER_SEARCH,
                    payload: getState().xspider.searchResults
                });
                resolve()
            }, 200)
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
        return state
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
