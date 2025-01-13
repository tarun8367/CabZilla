import React, { useRef, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { SocketContext } from '../context/SocketContext';
import { captainDataContext } from '../context/CaptainContext';

const CaptainHome = () => {

    const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

    const ridePopUpPanelRef = useRef(null)
    const confirmRidePopUpPanelRef = useRef(null)

    const { socket } = useContext(SocketContext)
    const { captain } = useContext(captainDataContext)

    useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    console.log({userId: captain._id,location:{ltd:position.coords.latitude,lng:position.coords.longitude}})

                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

        // return () => clearInterval(locationInterval)
    }, [])

    socket.on('new-ride', (data) => {
        console.log(data)
    })


    useGSAP(
        function () {
            if (ridePopUpPanel) {
                gsap.to(ridePopUpPanelRef.current, {
                    transform: "translateY(0%)",
                });
            } else {
                gsap.to(ridePopUpPanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [ridePopUpPanel]
    );

    useGSAP(
        function () {
            if (confirmRidePopUpPanel) {
                gsap.to(confirmRidePopUpPanelRef.current, {
                    transform: "translateY(0%)",
                });
            } else {
                gsap.to(confirmRidePopUpPanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [confirmRidePopUpPanel]
    );


    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>
            <div className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12' ref={ridePopUpPanelRef}>
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
            </div>
            <div className='fixed w-full z-10 h-screen bottom-0 translate-y-full  bg-white px-3 py-10 pt-12' ref={confirmRidePopUpPanelRef}>
                <ConfirmRidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
            </div>
        </div>
    )
}
export default CaptainHome