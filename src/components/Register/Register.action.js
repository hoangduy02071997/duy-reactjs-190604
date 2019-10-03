import firebaseApp from '../../firebaseConfig'
export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_ERROR = "REGISTER_ERROR"

export function registerRequest(){
    return {
        type: REGISTER_REQUEST
        //payload
    }
}

export function registerSuccess(authenticationData) {
    return{
        type: REGISTER_SUCCESS,
        payload: authenticationData
    }
}

export function registerError(error) {
    return{
        type: REGISTER_ERROR,
        error: error
    }
}

export function getRegister(email,password) {
  return async (dispatch) => {
      try{
          dispatch(registerRequest())
          const result = await firebaseApp.auth().signUpWithEmailAndPassword(email,password);
          dispatch(registerSuccess(result))
      }catch(error){
          dispatch(registerError(error.message))
      }

  }
}