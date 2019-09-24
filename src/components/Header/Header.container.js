import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
  return {
    lengthOfSelectedItem: state.productListReducer.selectedItems.length
  };
};

export default connect(mapStateToProps)(Header);
