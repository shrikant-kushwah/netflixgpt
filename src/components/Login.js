import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidteData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMAGE, PHOTO_URL } from '../utils/constants';

const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidteData(email.current.value, password.current.value)
    // console.log(message);
    setErrorMessage(message);
    if (message) return;
    // Sign Up / Sign In Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              })
              );
            }).catch((error) => {
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_IMAGE}
          alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute w-4/12 p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-4xl py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-900 rounded-lg' />}
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
