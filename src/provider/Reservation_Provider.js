import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReservationContext from '../context/Reservation_Context'

const ReservationProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
    })

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get(
                'http://localhost:8080/reservation/dormitoryRoom',
            )
            const result2 = await axios.get(
                'http://localhost:8080/reservation/reservationInfo',
            )
            const result3 = await axios.get(
                'http://localhost:8080/reservation/cancel',
            )

            setImages({
                images1: result1.data,
                images2: result2.data,
                images3: result3.data,
            })

            console.log('result1 : ', result1)
            console.log('result2 : ', result2)
            console.log('result3 : ', result3)
        }

        ImagesAPI()
    }, [])

    return (
        <ReservationContext.Provider value={images}>
            {children}
        </ReservationContext.Provider>
    )
}

export default ReservationProvider
