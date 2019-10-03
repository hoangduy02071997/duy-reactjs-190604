import firebaseApp from'../../firebaseConfig'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// action creator

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccessAction(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export function loginFailureAction(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export const login = (email, password) =>{
  return dispatchEvent => {
      dispatchEvent(loginRequestAction())
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
          dispatchEvent(loginSuccessAction(result.user))
      }).catch(error  => {
          dispatchEvent(loginFailureAction(error))
      })
  }
}
