import { REGISTER } from "./Register.action";

const initialState = {
  selectedItems: []
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload]
      };

    default:
      return state;
  }
}
