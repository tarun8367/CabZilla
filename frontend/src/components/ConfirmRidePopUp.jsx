import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {

    const [opt, setOpt] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0 "
                onClick={() => {
                    props.setConfirmRidePopUpPanel(false);
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
            </h5>
            <h3 className="text-2xl font-bold mb-5">Confirm the Ride to Start!</h3>

            <div className='flex justify-between items-center mt-4 p-3 bg-yellow-300 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/vA82mWMAvZxNGzevTux03__Fl-o8LxxIz97hzyDhhnQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc4LzA5Lzgy/LzM2MF9GXzY3ODA5/ODIxMV9SQnRqeTY4/bzRzTjBteUNXWTNP/ck05cmV2SjlKT3c0/MS5qcGc" alt="" />
                    <h2 className='text-lg font-medium'>Priya Sharma</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.3 KM</h5>
            </div>
            <div className="flex gap-2 justify-between flex-col items-center">

                <div className="w-full mt-5">
                    <div className="flex gap-5 items-center p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                First Floor, 623-A, Block-C
                            </h3>
                            <p className="text-sm -mt-1 text-gray-600">Indirapuram, Noida</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center p-3 border-b-2">
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                First Floor, 623-A, Block-C
                            </h3>
                            <p className="text-sm -mt-1 text-gray-600">Indirapuram, Noida</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center p-3">
                        <i className="text-lg ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                ₹193.20
                            </h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>
                    <div></div>

                </div>
                
                <div className='mt-6 w-full'>
                    <form onSubmit={(e) => {submitHandler(e)}}>
                        <input value={opt} onChange={(e) => setOpt(e.target.value)} className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-5" type="text" placeholder='Enter OTP' />
                    <Link to='/captain-riding' onClick={() => { props.setConfirmRidePopUpPanel(true) }} className="w-full mt-5 flex text-lg justify-center bg-green-600 text-white rounded-lg font-semibold p-3">
                        Confirm
                    </Link>
                    <button
                     onClick={() => { props.setRidePopUpPanel(false); props.setConfirmRidePopUpPanel(false) }}
                      className="w-full mt-2 text-lg bg-red-500 text-white rounded-lg font-semibold p-3">
                        Cancel
                    </button>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default ConfirmRidePopUp