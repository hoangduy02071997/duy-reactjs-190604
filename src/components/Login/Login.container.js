import { connect } from 'react-redux'
import { login } from './LoginForm.action'
import Login from './'

const mapStateToProps = (state) => {
  return {
    loading: state.loginReducer.loading,
    data: state.loginReducer.data,
    error: state.loginReducer.error
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)