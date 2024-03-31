import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img" />
      </div>
      <form className='absolute w-4/12 p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-4xl py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-900 rounded-lg' />}
        <input type="text" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-900 rounded-lg' />
        <input type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-900 rounded-lg' />
       <button className='p-3 my-4 bg-red-700 w-full rounded-lg font-semibold'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
       <p className='py-2' onClick={toggleSignInForm}>
       {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;
