import * as types from './mutation-types'

export default {
    [types.ADD_ORDER](state, item) {
        state.items.push(item)
    }
}


// export const SET_PRODUCTS = (state, products) => {

//     state.products = products;
// }
// export const SET_AUTH = (state, status) => {
//     state.authenticated = status

// }