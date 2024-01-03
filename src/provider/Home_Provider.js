import React, { useState, useEffect, useMemo, useCallback, useContext, useRef } from 'react'
import axios from 'axios'
import HomeContext from '../context/Home_Context'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const HomeProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        images4: null,
    })

    // const[token,setToken] = useState(null);

    // const [searchdata, setSearchdata] = useState({
    //     keyword: null,
    //     startDate: null,
    //     endDate: null,
    //     guest: null,
    // })

    // const navigate = useNavigate()

    // useEffect(() => {
    //     console.log(searchdata.keyword, searchdata.startDate, searchdata.endDate, searchdata.guest)
    // }, [searchdata])

    // const onSubmitSearch = useCallback(() => {
    //     const SearchdataGet = async () => {
    //         await axios
    //             .get('http://localhost:8080/searchList/dormitory', { params: searchdata })
    //             .then((res) => {
    //                 console.log('success : ', res.status)
    //                 console.log('res : ', res)
    //                 console.log('res.data : ', res.data)

    //                 // 성공적으로 처리되었을 때 리디렉션
    //                 navigate('/searchlist')
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching data: ', error)
    //                 // 요청이 실패했을 때의 동작을 여기에 추가합니다.
    //                 // 예: setError('Error fetching data');
    //             })
    //     }

    //     SearchdataGet()
    // }, [searchdata])

    // const value = useMemo(
    //     () => ({ images, searchdata, setSearchdata, onSubmitSearch }),
    //     [images, searchdata, setSearchdata, onSubmitSearch],
    // )

    const { location } = useContext(Context)
    const { coordinates } = location

    // useEffect(() => {
    const ImagesAPI = async (params) => {
        const result1 = await axios.get('http://localhost:8080/star', {
            params,
        })
        const result2 = await axios.get('http://localhost:8080/discount', {
            params,
        })
        const result3 = await axios.get('http://localhost:8080/earlyCheckin', {
            params,
        })
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

    // 위치 정보가 로드되었는지 확인
    //     ImagesAPI()
    // }, [coordinates])

    // API 호출 상태를 추적하는 상태 변수
    const [apiCalled, setApiCalled] = useState(false)
    useEffect(() => {
        // 이미 API를 호출했다면 다시 호출하지 않습니다.
        if (apiCalled) return

        // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
        const lat = coordinates?.lat ?? '37.49616859'
        const lng = coordinates?.lng ?? '127.0204826'
        const params = { lat, lng }

        const callApiIfNotCalled = () => {
            if (!apiCalled) {
                ImagesAPI(params)
                setApiCalled(true) // API를 호출했다는 상태를 업데이트
            }
        }

        // 위치 정보가 로드되었을 때 한 번만 API 호출
        if (location.loaded) {
            callApiIfNotCalled()
        }

        // // 컴포넌트 마운트 시에 API 호출
        // if (!location.loaded) {
        //     callApiIfNotCalled()
        // }
    }, [location.loaded]) // 빈 배열은 컴포넌트 마운트 시에만 실행됨을 보장합니다.

    const value = useMemo(() => ({ images }), [images])

    return (
        <HomeContext.Provider value={value}>
            <div>{children}</div>
        </HomeContext.Provider>
    )
}

export default HomeProvider
