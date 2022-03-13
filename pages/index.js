/* eslint-disable @next/next/no-img-element */
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import SignIn from '../pages/auth/signin'
import MainPage from '../components/MainPage';

export default function Home({}) {
  const {data: session} = useSession();
  if (!session){
    return(
      <>
      <header>
        <title>TwitterClone</title>
      </header>
      <div className='flex items-center justify-center mt-16'>
       <img src="/signin.webp" className=" w-52 h-52 rounded-xl" alt="" />
      </div>
      <div className='mt-8 font-semibold antialiased'>
       <h2 className='flex justify-center items-center'>This is not real Twitter, This build is for learning purposes only.</h2>
       <p className='flex justify-center items-center mt-3'>Made By Ankit Singh</p>
      </div>
      <div className="flex items-center justify-center h-20 mt-20">
          <button onClick={signIn} className="p-4 border-2 bg-blue-600 text-white rounded-lg ">Press Continue To Sign In</button>
      </div>
      
      </>
    )
  }
  else{
    return(
      <MainPage/>
    )
  }
};
