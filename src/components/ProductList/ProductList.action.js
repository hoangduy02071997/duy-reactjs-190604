export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export function getProductRequest() {
    return {
        type: GET_PRODUCT_REQUEST
    }
}
export function getProductSuccess(products) {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: products
    }
}
export function getProductError(error) {
    return {
        type: GET_PRODUCT_ERROR,
        error
    }
}

export function addItemToCartAction(item) {
    return {
        type: ADD_ITEM_TO_CART,
        payload: item
    }
}

export const addItemToCart = (item) => {
    return (dispatch) => {
        dispatch(productListRequest())
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=M%C3%B3c%20kho%C3%A1%20m%C3%A8o%20cute")
            .then(r => r.json())
            .then(result => dispatch(productListSuccess(result.data)))
            .catch(error => dispatch(productListFail(error)))

    }
}
export function setProducts(temp) {
    return (dispatch) => {
        dispatch(productListSuccess([...temp]))
    }
}

export function searchProduct(name) {
    return (dispatch) => {
        dispatch(productListRequest())
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=" + name)
            .then(r => r.json())
            .then(result => dispatch(productListSuccess(result.data)))
            .catch(error => dispatch(productListFail(error)))
    }
}