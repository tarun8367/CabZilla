import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url("https://images.unsplash.com/photo-1575004287262-bbb96a73eda4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHx0cmFmZmljJTIwbGlnaHR8ZW58MHwxfDB8fHwy")] h-screen w-full pt-8 flex justify-between flex-col bg-red-400'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Logo" />
        <div className='bg-white pb-7 py-4 px-4'>
        <h1 className='text-3xl font-bold'>Get Started with Uber</h1>
        <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
