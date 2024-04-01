import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidteData } from '../utils/validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidteData(email.current.value, password.current.value)
    // console.log(message);
    setErrorMessage(message);
 
  }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute w-4/12 p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-4xl py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-900 rounded-lg' />}
        <input
          ref={email}
          type="text"
          placeholder='Email Address'
          className='p-2 my-2 w-full bg-gray-900 rounded-lg'
        />
        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-2 my-2 w-full bg-gray-900 rounded-lg'
        />
        <p className='text-red-600 py-2'>{errorMessage}</p>
        <button
          className='p-3 my-4 bg-red-700 w-full rounded-lg font-semibold'
          onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className='py-2'
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;
