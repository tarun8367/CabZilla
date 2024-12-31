import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
                    <div className='flex items-center justify-start gap-3'>
                        <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/A5TB2TLWWE4sq0uD6U1p-QrmNk4w0AfcYrF55gUxFo8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/dW5ueS1jb25mdXNl/ZC15b3VuZy1ndXkt/d2l0aC1nbGFzc2Vz/LXBvc2luZ18xNzY0/MjAtMzAwMDguanBn/P3NlbXQ9YWlzX2h5/YnJpZA" alt="" />
                        <h4 className='text-lg font-medium'>Tarun Kumar</h4>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>₹295.20</h4>
                        <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4 p-3 mt-8 bg-gray-100 rounded-xl'>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                        <h5 className='text-lg font-medium'>15KM</h5>
                        <p className='text-sm text-gray-600'>Total Distance</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                        <h5 className='text-lg font-medium'>5</h5>
                        <p className='text-sm text-gray-600'>Total Rides</p>
                    </div>
                </div>
    </div>
  )
}

export default CaptainDetails
