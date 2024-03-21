import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';
import { BG_URL } from '../utils/constants';

const Login = () => {

   const [isSignInForm,setisSignInForm]=useState(true); 

   const dispatch=useDispatch();

   const [errormessage,seterrormessage]=useState(null)

   const navigate=useNavigate();

   const email=useRef(null)
   const password=useRef(null)
   const name=useRef(null)

   const handleButtonClick=()=>{
    // Validate The Form Data
    const mesg=checkValidateData(email.current.value,password.current.value)
    seterrormessage(mesg)

    if(mesg) return;

    // Sign In-Sign Up Logic

    if(!isSignInForm)
    {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
       photoURL: PHOTO_URL
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      // ...
    }).catch((error) => {
      // An error occurred
      seterrormessage(error.message)

      // ...
    });
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+ "-"+ errorMessage)
    // ..
  });


    }
    else{
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+ "-"+ errorMessage)

  });

    }

   }

  const toggleSignInForm=()=>{
      if(isSignInForm===true)
      {
        setisSignInForm(false)
      }
      else{
        setisSignInForm(true)
      }
  }
  return (
    <div>
        <Header></Header>
        <div className='absolute'>
        <img className='h-screen object-cover md:h-full' alt="logo" src={BG_URL}></img>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute w-full md:w-3/12 my-36 mx-auto right-0 left-0 p-12 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4  text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 text-white'></input>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 text-white'></input>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full  bg-gray-700  text-white'></input>
            <p className='text-red-500 font-bold text-lg p-2'>{errormessage}</p>
            <button className='p-4 my-6 bg-red-700  text-white w-full rounded-lg ' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='text-white py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? 'New To Netflix? Sign Up Now ' : 'Already Registred? Sign In Now'}
            </p>
        </form>
    </div>
  )
}

export default Login