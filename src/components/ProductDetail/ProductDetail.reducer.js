import {SINGLE_REQUEST} from './ProductDetail.action';
import {SINGLE_SUCCESS} from './ProductDetail.action';
import {SINGLE_ERROR} from './ProductDetail.action';
const initialState = {
    selectedItems:[]
}

export default function productDetailReducer (state=initialState,action){
    switch(action.type){
        case SINGLE_REQUEST:
            return{
                ...state,
                selectedItems: [...state.selectedItems,action.payload]
            }
        case SINGLE_SUCCESS:
        return{
            ...state,
            selectedItems: [...state.selectedItems,action.payload]
        }
        case SINGLE_ERROR:
            return{
                ...state,
                selectedItems: [...state.selectedItems,action.payload]
            }
    }
}