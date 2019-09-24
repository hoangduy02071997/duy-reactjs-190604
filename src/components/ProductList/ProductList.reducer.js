
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_ERROR} from "./ProductList.action";
import {ADD_ITEM_TO_CART} from './ProductList.action';

const initialState = {
  selectedItems:[],
  result: null,
  load: false,
  fail: null
};

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {...state, selectedItems:[...state.selectedItems, action.payload]};
    case PRODUCT_LIST_REQUEST:
      return { ...state, load: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, load: false, result: action.payload };
    case PRODUCT_LIST_ERROR:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}