import React from 'react'
import "./Register.css"
function Register() {
  return (
    <>
    <div className="sign-up-container">
        <div className="leftpart">
            <div className="app">
                <p className='appname'>BeSocial</p>
                <span className='app-slogan'>Let the relation be open</span>
            </div>
        </div>
        <div className="rightpart">
            <div className="rightheading">
                SignUp
            </div>
            <div className="signupform">
                <form>
                    <label htmlFor='username'>UserName:</label>
                    <input type="text" placeholder='others will see' />

                    <label htmlFor="name">Email:</label>
                    <input type="email" id="email" className='email' placeholder=''/>

                    <label htmlFor='username'>Password:</label>
                    <input type='password' id="password" className='password' placeholder='*******'/>


                    <button type='submit' className='submitButton'>Register</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register