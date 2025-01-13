import React, { useState, useEffect } from 'react'
import { captainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('captain-token')
    const navigate = useNavigate()

    const { captain, setCaptain } = React.useContext(captainDataContext)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
            if (res.status === 200) {
                const data = res.data;
                setCaptain(data);
                setIsLoading(false);
            }
        }).catch((err) => {
            console.log(err);
            localStorage.removeItem('captain-token');
            navigate('/captain-login');
        })

    }, [token]);



    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {children}
        </>
    )
}
export default CaptainProtectedWrapper