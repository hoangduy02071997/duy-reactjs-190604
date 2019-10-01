import { PRD_DETAIL_REQUEST } from "./ProductDetail.action";
import { PRD_DETAIL_SUCCESS } from "./ProductDetail.action";
import { PRD_DETAIL_ERROR } from "./ProductDetail.action";
import { VIEW_PRD_DETAIL } from "./ProductDetail.action";

const initialState = {
  result:null,
  load:false,
  error:null
};

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case PRD_DETAIL_REQUEST:
      return {
        ...state, load:true
      };
    case PRD_DETAIL_SUCCESS:
      return{
        ...state, load : false, result : action.payload
      };
    case PRD_DETAIL_ERROR :
      return {
        ...state, load : false, error : action.error
      };
    default:
      return state;
  }
}
