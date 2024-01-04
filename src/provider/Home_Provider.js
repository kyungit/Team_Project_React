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
        // useEffect(() => {
        //     const ImagesAPI = async () => {
        //         let result1 = ''
        //         let result2 = ''
        //         let result3 = ''
        //
        //         if(coordinates==null){
        //             result1 = await axios.get('http://localhost:8080/star', {
        //                 params: {
        //                     lat: '37.49616859',
        //                     lng: '127.0204826',
        //                 },
        //             })
        //         }
        //         else {
        //             result1 = await axios.get('http://localhost:8080/star', {
        //                 params: {
        //                     lat: coordinates.lat ,
        //                     lng: coordinates.lng ,
        //                 },
        //             })
        //         }
        //         // result1 = await axios.get('http://localhost:8080/star', {
        //         //     params: {
        //         //         lat: coordinates.lat'37.4961 || 6859',
        //         //         lng: coordinates.lng || '127.0204826',
        //         //     },
        //         // })
        //         result2 = await axios.get('http://localhost:8080/discount',{
        //             params: {
        //                 lat: coordinates.lat ,
        //                 lng: coordinates.lng ,
        //             },
        //         })
        //         result3 = await axios.get('http://localhost:8080/earlyCheckin')
        //         // const result4 = await axios.get('http://localhost:8080/type')

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
        // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
        const lat = location.coordinates?.lat ?? '37.49616859'
        const lng = location.coordinates?.lng ?? '127.0204826'
        const params = { lat, lng }

        const callApi = () => {
            ImagesAPI(params)
            setApiCalled(true) // API를 호출했다는 상태를 업데이트
        }

        console.log('location.coordinates Home : ', location.coordinates)

        // 위치 정보가 로드되었을 때 한 번만 API 호출
        if (location.loaded) {
            callApi()
        }
    }, [location]) // location 객체 자체를 의존성 배열에 추가

    useEffect(() => {
        const callApi = (lat, lng) => {
            const params = { lat, lng }
            ImagesAPI(params)
            setApiCalled(true) // API를 호출했다는 상태를 업데이트
        }

        console.log('location.coordinates Home : ', location.coordinates)

        // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
        if (location.loaded) {
            const lat = location.coordinates?.lat
            const lng = location.coordinates?.lng
            callApi(lat, lng)
        } else if (!apiCalled) {
            const lat = '37.49616859'
            const lng = '127.0204826'
            callApi(lat, lng)
        }
    }, [location, apiCalled]) // location과 apiCalled 객체를 의존성 배열에 추가

    // // API 호출 상태를 추적하는 상태 변수
    // const [apiCalled, setApiCalled] = useState(false)

    // useEffect(() => {
    //     // 위치 정보가 로드되었으면 실제 위치를, 그렇지 않으면 기본 위치를 사용합니다.
    //     let lat = '37.49616859'
    //     let lng = '127.0204826'

    //     // 위치 정보가 로드되면 실제 위치를 사용하여 API를 호출합니다.
    //     if (location.loaded) {
    //         lat = location.coordinates?.lat
    //         lng = location.coordinates?.lng
    //     }

    //     // API 호출을 지연시키는 함수
    //     const delayAPICall = async () => {
    //         await new Promise((resolve) => setTimeout(resolve, 2000)) // 2초 기다립니다.
    //         const params = { lat, lng }
    //         ImagesAPI(params)
    //         setApiCalled(true) // API를 호출했다는 상태를 업데이트
    //     }

    //     // API 호출이 아직 이루어지지 않았다면 API를 호출합니다.
    //     if (!apiCalled) {
    //         delayAPICall()
    //     }
    // }, [location, apiCalled]) // location과 apiCalled 객체를 의존성 배열에 추가

    const value = useMemo(() => ({ images }), [images])

    return (
        <HomeContext.Provider value={value}>
            <div>{children}</div>
        </HomeContext.Provider>
    )
}

export default HomeProvider
