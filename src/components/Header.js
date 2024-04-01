import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-52' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
        className='bg-red-600 py-2 p-2 my-2 mx-4 text-xl font-bold text-white rounded-lg '
        >Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header;
