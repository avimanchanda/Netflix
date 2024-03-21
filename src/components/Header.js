import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constants';
import { toogleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLangauage } from '../utils/configSlice';

const Header = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
  const gptvalue=useSelector(store=>store.gpt.showGptSearch)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")

        // ...
      }
    });


    return ()=>unsubscribe();
  },[]);

  const handleGPTclick=()=>{
    // Toogle the GPT Search
    dispatch(toogleGptSearchView())

  }

  const handleLangChange=(e)=>{
    console.log(e.target.value)
      dispatch(changeLangauage(e.target.value))
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' alt='netflix' src={LOGO}></img>
        
        {
          user &&
        <div className='flex p-2 justify-between gap-2'>
        {
          gptvalue && (
        <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLangChange}>
        {
          SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
        }         
        </select>
        )}
          <button className='py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg ' onClick={handleGPTclick}>
            {
              gptvalue ? "Home Page" : "GPT Search"
            }
          </button>
          <img className='hidden md:block w-12 h-12'   src={user?.photoURL}></img>
          <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>Sign Out</button>
        </div>
        }
    </div>
  )
}

export default Header