import { REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS  } from "./Register.action";

const initialState = {
  email: null,
  password: null,
  errmess: null,
  loading: false
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
      case REGISTER_REQUEST:
          return { 
              ...state,
              loading: true
          }
      case REGISTER_SUCCESS:
          return {
              ...state,
              email: action.payload.email,
              password: action.payload.password
          }
      case REGISTER_ERROR:
          return {
              ...state,
              errormess: action.error
          }

      default:
          return state
  }
}