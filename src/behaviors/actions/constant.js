import { STORE_DETAIL, STORE_BRAND} from "../../common/constants";

export const storeDetailAction = (data) => (dispatch) => {
    dispatch({
        type: STORE_DETAIL,
        payload: data
    })
}

export const storeBrandAction = (data) => (dispatch) => {
    dispatch({
        type: STORE_BRAND,
        payload: data
    })
}