import { connect } from 'react-redux'
import Header from './'

const mapStateToProps = (state) => {
  return {
    lengthOfSelectedItem: state.productListReducer.selectedItems.length
  }
}

export default connect(mapStateToProps)(Header)