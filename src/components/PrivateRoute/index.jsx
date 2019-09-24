import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import firebase from 'firebase'

function PrivateRoute({ component: Component, render, ...rest }) {
  const [user, setUser] = useState()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((result) => {
      console.log(result, "result")
      setUser(result)
    });
  }, [setUser])

  if (user === undefined) {
    return <p>'Loading....'</p>
  }

  const renderComponent = (props) => {
    if(user) {
      if(Component) {
        return <Component {...props} />
      }

      return render(props)
    }

    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    )
    
  }
  return (
    <Route
      {...rest}
      render={renderComponent}
    />
  );
}

export default PrivateRoute