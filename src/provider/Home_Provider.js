import React, { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import HomeContext from '../context/Home_Context'
import { useNavigate } from 'react-router-dom'

const ImageProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        images4: null,
    })

    const [searchdata, setSearchdata] = useState({
        keyword: null,
        startDate: null,
        endDate: null,
        guest: null,
    })

    const navigate = useNavigate()

    useEffect(() => {
        console.log(searchdata.keyword, searchdata.startDate, searchdata.endDate, searchdata.guest)
    }, [searchdata])

    const onSubmitSearch = useCallback(() => {
        const SearchdataGet = async () => {
            await axios
                .get('http://localhost:8080/searchList/dormitory', { params: searchdata })
                .then((res) => {
                    console.log('success : ', res.status)
                    console.log('res : ', res)
                    console.log('res.data : ', res.data)

                    // 성공적으로 처리되었을 때 리디렉션
                    navigate('/searchlist')
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error)
                    // 요청이 실패했을 때의 동작을 여기에 추가합니다.
                    // 예: setError('Error fetching data');
                })
        }

        SearchdataGet()
    }, [searchdata])

    const value = useMemo(
        () => ({ images, searchdata, setSearchdata, onSubmitSearch }),
        [images, searchdata, setSearchdata, onSubmitSearch],
    )

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get('http://localhost:8080/earlyCheckin')
            const result2 = await axios.get('http://localhost:8080/earlyCheckin')
            const result3 = await axios.get('http://localhost:8080/grade')
            // const result4 = await axios.get('http://localhost:8080/type')

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

    return (
        <HomeContext.Provider value={value}>
            <div>{children}</div>
        </HomeContext.Provider>
    )
}

export default ImageProvider
