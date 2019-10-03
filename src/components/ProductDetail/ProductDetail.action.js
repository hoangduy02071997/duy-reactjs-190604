export const PRD_DETAIL_REQUEST = "PRD_DETAIL_REQUEST";
export const PRD_DETAIL_SUCCESS = "PRD_DETAIL_SUCCESS";
export const PRD_DETAIL_ERROR = "PRD_DETAIL_ERROR";
export const VIEW_PRD_DETAIL = "VIEW_PRD_DETAIL";

export function singleRequest() {
  return {
    type: PRD_DETAIL_REQUEST
  };
}
export function singleSuccess(productDetail) {
  return {
    type: PRD_DETAIL_SUCCESS,
    payload: productDetail
  };
}
export function singleError(error) {
  return {
    type: PRD_DETAIL_ERROR,
    error: error
  };
}
export function getProductDetail (id){
  return (dispatch) => {
    console.log('hello')
    dispatch(singleRequest(id))
    return fetch(`https://mapi.sendo.vn/mob/product/${id}/detail/`)
      .then (r => r.json)
      .then (result => dispatch(singleSuccess(result)))
      .then (error => dispatch(singleError(error)))
  }
}
