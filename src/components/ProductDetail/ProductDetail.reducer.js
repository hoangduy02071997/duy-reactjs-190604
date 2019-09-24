import { PRD_DETAIL_REQUEST } from "./ProductDetail.action";
import { PRD_DETAIL_SUCCESS } from "./ProductDetail.action";
import { PRD_DETAIL_ERROR } from "./ProductDetail.action";
import { VIEW_PRD_DETAIL } from "./ProductDetail.action";

const initialState = {
  selectedItems: []
};

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_PRD_DETAIL:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload]
      };
    default:
      return state;
  }
}
