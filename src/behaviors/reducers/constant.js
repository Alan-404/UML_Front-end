import { STORE_DETAIL, STORE_BRAND } from "../../common/constants";


export const storeDetailReducer = (state={}, action) => {
    switch(action.type){
        case STORE_DETAIL:
            return {myDetails: action.payload}
        default:
            return state
    }
}

export const storeBrandReducer = (state={}, action) => {
    switch(action.type){
        case STORE_BRAND:
            return {brandData: action.payload}
        default:
            return state
    }
}