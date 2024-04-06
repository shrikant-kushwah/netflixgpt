import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptPage = useSelector(store => store.gpt.showGptPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this is unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);


  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  const handleGptSearchClick = () => {
    //  Toggle GPT Search 
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-52' src={LOGO}
        alt="logo"
      />
      {user && (
        <div className='flex p-2 items-center'>
          {showGptPage && (
            <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option
                  className='bg-white text-black'
                  key={language.identifier}
                  value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleGptSearchClick} className='bg-red-700 py-1 px-2 my-2 mx-4 text-xl font-semibold text-white rounded-lg '>GPT Search</button>
          <img
            className='w-12 h-12'
            src={user.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className='bg-red-700 py-1 px-2 my-2 mx-4 text-xl font-semibold text-white rounded-lg '
          >Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header;
