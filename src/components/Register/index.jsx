import React, { useState } from 'react';
import firebase from 'firebase'

export default function RegisterForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('') 
  const onSubmit  = async (e) => {
    e.preventDefault()
    // console.log({ email, password })
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      props.history.push('/login')
    } catch(error) {
      // console.log(error.message, "error")
      setError(error.message)
    }

  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = () => {
    props.history.push('/login')
  }

  return (
    <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Register</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Register</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Signup From Here</h3>
                  <p className="text-danger">{error}</p>
                  <form onSubmit={onSubmit}>
                    <label htmlFor="email-id">Email Address <span>**</span></label>
                    <input id="email-id" type="text" onChange={onChangeEmail} placeholder="Enter Username or Email address..." />
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input id="pass" type="password" onChange={onChangePassword} placeholder="Enter password..." />
                    <div className="mt-10" />
                    <button className="btn theme-btn-2 w-100">Register Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <button className="btn theme-btn w-100" onClick={onLogin}>login Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
  )
}