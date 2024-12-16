import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="texr-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Tarun</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Dzire</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-between flex-col items-center">

                    <div className="w-full mt-5">

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

                </div>
                <button className="w-full mt-5 bg-green-600 text-white rounded-lg font-semibold p-2">
                    Make a Payment
                </button>

            </div>
        </div>
    )
}

export default Riding
