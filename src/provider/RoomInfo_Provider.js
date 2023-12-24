import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import RoomInfoContext from '../context/RoomInfo_Context'

const RoomInfoProvider = ({ children }) => {
    const [roomInfos, setRoomInfos] = useState({
        roomInfos1: null,
        roomInfos2: null,
        roomInfos3: null,
        roomInfos4: null,
        roomInfos5: null,
        roomInfos6: null,
    })

    let d_code = sessionStorage.getItem('d_code')

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get(`http://localhost:8080/roomInfo/roomReview?d_code=${d_code}`)
            // const result2 = await axios.get('http://localhost:8080/roomInfo/review')
            const result3 = await axios.get(`http://localhost:8080/roomInfo/map?d_code=${d_code}`)
            const result4 = await axios.get(`http://localhost:8080/roomInfo/roomDetail?d_code=${d_code}`)
            const result5 = await axios.get(`http://localhost:8080/roomInfo/dormitory?d_code=${d_code}`)
            // const result6 = await axios.get(
            //     'http://localhost:8080/roomInfo/amenity',
            // )

            setRoomInfos({
                roomInfos1: result1.data,
                // roomInfos2: result2.data,
                roomInfos3: result3.data,
                roomInfos4: result4.data,
                roomInfos5: result5.data,
                // roomInfoss6: result6.data,
            })

            console.log('result1 : ', result1)
            // console.log('result2 : ', result2)
            console.log('result3 : ', result3)
            console.log('result4 : ', result4)
            console.log('result5 : ', result5)
            // console.log('result6 : ', result6)
        }

        ImagesAPI()
    }, [])

    const value = useMemo(() => ({ roomInfos }), [roomInfos])

    return <RoomInfoContext.Provider value={value}>{children}</RoomInfoContext.Provider>
}

export default RoomInfoProvider
