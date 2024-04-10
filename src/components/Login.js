import React, { useState } from 'react'
import Header from './Header.js'
const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm =()=>{ 
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg'
          srcset='https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w'
          alt=''
        ></img>
        <form className='w-3/12 bg-black absolute bottom-60 mx-auto right-0 left-0 flex flex-col p-5 rounded-xl bg-opacity-80'>
          <h1 className='text-white text-2xl'>{ isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input
            className='p-2 m-2 rounded-xl bg-gray-800'
            type='text'
            placeholder='Your Name'
          ></input>}
          <input
            className='p-2 m-2 rounded-xl bg-gray-800'
            type='text'
            placeholder='Enter Your email'
          ></input>
          <input
            className='p-2 m-2 rounded-xl bg-gray-800'
            type='password'
            placeholder='Enter Your password'
          ></input>
          <button className='bg-red-700 p-2 m-2 text-white rounded-xl'>
            {isSignInForm?"Sign In":"Sign Up"}
          </button>

          <p className='text-white mt-4 ml-2 cursor-pointer' onClick={toggleSignInForm}>New to Netflix Sign Up now</p>
        </form>
      </div>
    </div>
  );
}

export default Login

