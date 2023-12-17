import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RoomInfoContext from '../context/RoomInfo_Context'

const RoomInfoProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        images4: null,
        images5: null,
        images6: null,
    })

    // useEffect(() => {
    //     const ImagesAPI = async () => {
    //         const result1 = await axios.get(
    //             'http://localhost:8080/room/roomReview',
    //         )
    //         // const result2 = await axios.get('http://localhost:8080/room/review')
    //         const result3 = await axios.get('http://localhost:8080/room/map')
    //         const result4 = await axios.get(
    //             'http://localhost:8080/room/roomDetail',
    //         )
    //         const result5 = await axios.get(
    //             'http://localhost:8080/room/dormitory',
    //         )
    //         // const result6 = await axios.get(
    //         //     'http://localhost:8080/room/amenity',
    //         // )

    //         setImages({
    //             images1: result1.data,
    //             // images2: result2.data,
    //             images3: result3.data,
    //             images4: result4.data,
    //             images5: result5.data,
    //             // images6: result6.data,
    //         })

    //         console.log('result1 : ', result1)
    //         // console.log('result2 : ', result2)
    //         console.log('result3 : ', result3)
    //         console.log('result4 : ', result4)
    //         console.log('result5 : ', result5)
    //         // console.log('result6 : ', result6)
    //     }

    //     ImagesAPI()
    // }, [])

    return (
        <RoomInfoContext.Provider value={images}>
            {children}
        </RoomInfoContext.Provider>
    )
}

export default RoomInfoProvider
