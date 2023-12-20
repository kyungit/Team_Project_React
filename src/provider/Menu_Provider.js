import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuContext from '../context/Menu_Context'

const MenuProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        // images4: null,
    })

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get('http://localhost:8080/menu/memberInfo')
            const result2 = await axios.get('http://localhost:8080/menu/reservationInfo')
            const result3 = await axios.get('http://localhost:8080/menu/visited')
            // const result4 = await axios.get('')

            setImages({
                images1: result1.data,
                images2: result2.data,
                images3: result3.data,
                // images4: result4.data,
            })

            console.log('result1 : ', result1)
            console.log('result2 : ', result2)
            console.log('result3 : ', result3)
            // console.log('result4 : ', result4)
        }

        ImagesAPI()
    }, [])

    return <MenuContext.Provider value={images}>{children}</MenuContext.Provider>
}

export default MenuProvider
