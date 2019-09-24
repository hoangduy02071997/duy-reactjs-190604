import { connect } from 'react-redux'
import { addItemToCart, getProductRequest, getProductError, getProductSuccess} from './ProductList.action'
import ProductList from './'

export const prmotedProductsSelector = (state) => {
  return state.productListReducer.data.filter(elm => elm.price > elm.final_price)
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state.productListReducer.selectedItems,
    promotedProducts: promotedProductsSelector(state)
  }
}

const mapDispatchToProps = {
  addItemToCart,getProductError,getProductRequest,getProductSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)