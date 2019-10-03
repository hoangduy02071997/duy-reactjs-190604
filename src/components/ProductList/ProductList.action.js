export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR';

export function getProductRequest() {
    return {
        type: PRODUCT_LIST_REQUEST
    }
}
export function getProductSuccess(products) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: products
    }
}
export function getProductError(error) {
    return {
        type: PRODUCT_LIST_ERROR,
        error
    }
}

export function addItemToCartAction(item) {
    return {
        type: ADD_ITEM_TO_CART,
        payload: item
    }
}
    

export default function getProduct (id){
    return (dispatch) => {
        dispatch(getProductRequest())
        return fetch ("https://mapi.sendo.vn/mob/product/search?p=1&q=M%C3%B3c%20kho%C3%A1%20m%C3%A8o%20cute")
        .then(r => r.json())
        .then(result => dispatch(getProductSuccess(result.data)))
        .catch(error => dispatch(getProductError(error)))
    }
}
export const addItemToCart = (item) => {
    return (dispatch) => {
        dispatch(getProductRequest())
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=M%C3%B3c%20kho%C3%A1%20m%C3%A8o%20cute")
            .then(r => r.json())
            .then(result => dispatch(getProductSuccess(result.data)))
            .catch(error => dispatch(getProductError(error)))
    }
}
export function setProducts(temp) {
    return (dispatch) => {
        dispatch(getProductSuccess([...temp]))
    }
}

export function searchProduct(name) {
    return (dispatch) => {
        dispatch(getProductRequest())
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=" + name)
            .then(r => r.json())
            .then(result => dispatch(getProductSuccess(result.data)))
            .catch(error => dispatch(getProductError(error)))
    }
}