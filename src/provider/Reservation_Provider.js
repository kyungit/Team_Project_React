import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import ReservationContext from '../context/Reservation_Context'

const ReservationProvider = ({ children }) => {
    const [reservations, setRerservations] = useState({
        reservations1: null,
        reservations2: null,
        reservations3: null,
    })

    const [reservationdata, setReservationdata] = useState({
        d_code: '1',
        r_code: '2',
        d_name: '3',
        d_type: '4',
        r_img: 'a',
        r_name: 'a',

        m_userid: 'a',
        m_telno: 'a',

        reservation_checkin: 'a',
        reservation_checkout: 'a',
        reservation_guest: 1,
        reservation_price: 2,
        reservation_description: 'a',
        s_status: 3,
    })

    // useEffect(() => {
    //     const ReservationdataPost = async () => {
    //         await axios
    //             .post('http://localhost:8080/reservation/reservationmemberInfo', reservationdata)
    //             .then((res) => {
    //                 console.log('res : ', res)
    //                 console.log('res.data : ', res.data)
    //             })
    //     }

    //     ReservationdataPost()
    // }, [reservationdata])

    let d_code = sessionStorage.getItem('d_code')

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get(`http://localhost:8080/reservation/dormitoryRoom?d_code=${d_code}`)
            // const result2 = await axios.get('http://localhost:8080/reservation/reservationInfo')
            // const result3 = await axios.get('http://localhost:8080/reservation/cancel')

            setRerservations({
                reservations1: result1.data,
                // reservations2: result2.data,
                // reservations3: result3.data,
            })

            console.log('result1 : ', result1)
            // console.log('result2 : ', result2)
            // console.log('result3 : ', result3)
        }

        ImagesAPI()
    }, [])

    const value = useMemo(() => ({ reservations }), [reservations])

    return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}

export default ReservationProvider
