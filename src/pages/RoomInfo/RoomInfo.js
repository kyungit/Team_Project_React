import React, { useState } from 'react'
import RoomInfo1 from '../../components/RoomInfo/RoomInfo1'
import RoomInfo2 from '../../components/RoomInfo/RoomInfo2'
import RoomInfo3 from '../../components/RoomInfo/RoomInfo3'
import RoomInfo4 from '../../components/RoomInfo/RoomInfo4'
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
            <RoomInfo1 />
            <RoomInfo2 />
            <RoomInfo3 />
            <RoomInfo4 />
        </Div>
    )
}
