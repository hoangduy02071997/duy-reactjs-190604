import { connect } from "react-redux";
import {
  addItemToCart,
  getProductRequest,
  getProductError,
  getProductSuccess
} from "../ProductList/ProductList.action";
import ProductList from "../ProductList/ProductList";

export const prmotedProductsSelector = state => {
  return state.productListReducer.data.filter(
    elm => elm.price > elm.final_price
  );
};

const mapStateToProps = state => {
  return {
    selectedItems: state.productListReducer.selectedItems,
    promotedProducts: prmotedProductsSelector(state)
  };
};

const mapDispatchToProps = {
  addItemToCart,
  getProductError,
  getProductRequest,
  getProductSuccess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
