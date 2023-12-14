import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeContext from '../context/Home_Context'
import Home from '../pages/Home/Home'

const ImageProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        images4: null,
    })

    const [searchdata, setSearchdata] = useState({
        pageNum: 4,
        keyword: '서울',
        type: '호텔',
        star: '3',
        startDate: '2024-01-11',
        endDate: '2024-01-05',
        guest: 1,
    })

    useEffect(() => {
        const SearchdataGet = async () => {
            await axios
                .get('http://localhost:8080/searchList/dormitory', { params: searchdata })
                .then((res) => {
                    console.log('res : ', res)
                    console.log('res.data : ', res.data)
                })
        }

        SearchdataGet()
    }, [searchdata])

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get('http://localhost:8080/earlyCheckin')
            const result2 = await axios.get('http://localhost:8080/earlyCheckin')
            const result3 = await axios.get('http://localhost:8080/grade')
            const result4 = await axios.get('http://localhost:8080/type')

            setImages({
                images1: result1.data,
                images2: result2.data,
                images3: result3.data,
                images4: result4.data,
            })

            console.log('result1 : ', result1)
            console.log('result2 : ', result2)
            console.log('result3 : ', result3)
            console.log('result4 : ', result4)
        }

        ImagesAPI()
    }, [])

    return (
        <HomeContext.Provider value={{ images, searchdata, setSearchdata }}>
            {children}
        </HomeContext.Provider>
    )
}

export default ImageProvider
