import React, { useState } from 'react'

function UserGreetings() {

    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    function loginHandler(){
        setIsLoggedIn(true);
    }
    function logoutHandler(){
        !setIsLoggedIn(false) ? console.log("Laready out") : console.log("you have logged in")
    }

  return (
    <div>

        {isLoggedIn ? "Welcome" : "Login"}
      <div>
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  )
}

export default UserGreetings
