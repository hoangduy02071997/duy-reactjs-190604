export const PRD_DETAIL_REQUEST = "PRD_DETAIL_REQUEST";
export const PRD_DETAIL_SUCCESS = "PRD_DETAIL_SUCCESS";
export const PRD_DETAIL_ERROR = "PRD_DETAIL_ERROR";
export const VIEW_PRD_DETAIL = "VIEW_PRD_DETAIL";

export function singleRequest() {
  return {
    type: PRD_DETAIL_REQUEST
  };
}
export function singleSuccess(email, password) {
  return {
    type: PRD_DETAIL_SUCCESS,
    payload: { email, password }
  };
}
export function singleError(error) {
  return {
    type: PRD_DETAIL_ERROR,
    error: error
  };
}
