import firebase from 'firebase'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// action creator

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccessAction(result) {
  return {
    type: LOGIN_SUCCESS,
    payload: result
  }
}

export function loginFailureAction(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function login(email, password) {
  return async (dispatch) => {
    dispatch(loginRequestAction())
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      dispatch(loginSuccessAction(result))
    } catch(error) {
      dispatch(loginFailureAction(error.message))
    }
  }
}
