import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

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
    return ()=> unsubscribe();
  }, []);

  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-52' src={LOGO}
        alt="logo"
      />
      {user && (<div className='flex p-2 items-center'>
        <img
          className='w-12 h-12'
          src={user.photoURL}
          alt="user-icon"
        />
        <button
          onClick={handleSignOut}
          className='bg-red-600 py-1 p-2 my-2 mx-4 text-xl font-semibold text-white rounded-lg '
        >Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header;
