import { connect } from 'react-redux'
import Login from './Login'
import {login} from './Login.action'

const mapStateToProps = (state) => {
  
  return {
    user: state.loginReducer.result,
    error: state.loginReducer.error,
    load: state.loginReducer.load
  }
}

const mapDispatchToProps = {
  login : login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)