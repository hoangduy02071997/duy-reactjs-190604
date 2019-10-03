import React from 'react'
import { useState, useEffect } from 'react'
import firebaseApp from '../../firebaseConfig';
export default function Register(props) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errMsg, setErrMsg] = useState(null)
  const [completeRegister, setCompleteRegister] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      setCompleteRegister(true)
    } catch (error) {
      setErrMsg(error.message)
    }
  }

  const onChange = (e) => {
    const id = e.target.id
    setFormData({ ...formData, [id]: e.target.value })
  }
  useEffect(() => {
    if (completeRegister === true) {
      props.history.push('/Login')
    }
  }, [completeRegister])
  return (
    <div>

      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
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
                  {
                    (completeRegister) ?
                      <p>Bạn đã đăng ký thành công</p>
                      :
                      <form action="#">
                        <p>{errMsg}</p>
                        <label htmlFor="name">Username <span>**</span></label>
                        <input id="name" type="text" placeholder="Enter Username or Email address..." />
                        <label htmlFor="email-id">Email Address <span>**</span></label>
                        <input id="email" onChange={onChange} type="text" placeholder="Enter Username or Email address..." />
                        <label htmlFor="pass">Password <span>**</span></label>
                        <input id="password" onChange={onChange} type="password" placeholder="Enter password..." />
                        <div className="mt-10" />
                        <button className="btn theme-btn-2 w-100" onClick={handleSubmit}>Register Now</button>
                        <div className="or-divide"><span>or</span></div>
                        <button className="btn theme-btn w-100">login Now</button>
                      </form>
                  }

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </div>
  );
};