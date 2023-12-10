import React, { useState } from 'react'
import Reservation1 from '../../components/Reservation/Reservation1'
import Reservation2 from '../../components/Reservation/Reservation2'
import Reservation3 from '../../components/Reservation/Reservation3'
import Reservation4 from '../../components/Reservation/Reservation4'
import Div from '../../components/Common/Div'
import axios from 'axios'

export default function Reservation() {
    const [data, setData] = useState(null)
    const getReservationApi = () => {
        axios.get('').then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }
    // const [title, setTitle] = useState('')
    // const getTitle = () => {
    //     for (let i = 0; i < data.length; i++) {
    //         setTitle(data[i].title)
    //     }
    // }
    
    return (
        <Div className="grid grid-cols-12 h-auto">
            <Reservation1 />
            <Reservation2 />
            <Reservation3 />
            <Reservation4 />
        </Div>
    )
}
