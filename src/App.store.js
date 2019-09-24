import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './components/Login/Login.reducer'
import productListReducer from './components/ProductList/ProductList.reducer'
import productDetailReducer from './components/ProductDetail/ProductDetail.reducer'
import thunk from 'redux-thunk'

export const store = createStore(
  combineReducers({
    loginReducer,
    productListReducer,
    productDetailReducer
  }),
  applyMiddleware(thunk)
)