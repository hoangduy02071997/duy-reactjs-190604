export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const REGISTER = `REGISTER`;

export function registerRequest() {
  return {
    type: REGISTER_REQUEST
    //payload
  };
}

export function registerSuccess(authenticationData) {
  return {
    type: REGISTER_SUCCESS,
    payload: authenticationData
  };
}

export function registerFail(error) {
  return {
    type: REGISTER_FAIL,
    error: error
  };
}
