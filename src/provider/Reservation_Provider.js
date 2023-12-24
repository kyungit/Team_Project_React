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
        d_code: null,
        r_code: null,
        d_name: null,
        d_type: null,
        r_img: null,
        r_name: null,
        d_discount:null,

        m_userid: null,
        m_telno: null,
        m_username:null,


        reservation_checkin: null,
        reservation_checkout: null,
        reservation_guest: null,
        reservation_price: null,
        reservation_description: null,
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
    let r_code = sessionStorage.getItem('r_code')

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get(`http://localhost:8080/reservation/dormitoryRoom?r_code=${r_code}`)
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

    const value = useMemo(() => ({ reservations,reservationdata,setReservationdata }), [reservations,reservationdata])

    return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}

export default ReservationProvider
