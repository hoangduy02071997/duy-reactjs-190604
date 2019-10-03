import {connect} from 'react-redux'
import ProductDetail from './ProductDetail'
import {getProductDetail} from './ProductDetail.action'

const mapStateToProps = (state) => {
    return {
        product: state.productDetailReducer.result,
        error: state.productDetailReducer.error,
        load: state.productDetailReducer.load
    }
}

const mapDispatchToProps = {
    getProductDetail: getProductDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)