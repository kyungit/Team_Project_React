import React, { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import HomeContext from '../context/Home_Context'
import { useNavigate } from 'react-router-dom'

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

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get('http://localhost:8080/star')
            const result2 = await axios.get('http://localhost:8080/discount')
            const result3 = await axios.get('http://localhost:8080/discount')
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

    const value = useMemo(() => ({ images }), [images])


    // axios({
    //     method: 'get', // 또는 'post', 서버 설정에 따라 다름
    //     url: 'http://localhost:8080/login/oauth2/code/{registrationId}',
    //     // 필요하다면 headers 등의 추가적인 설정이 가능합니다.
    //     })
    //     .then(response => {
    //         // 서버로부터 받은 응답에서 액세스 토큰을 추출합니다.
    //         const accessToken = response.data.access_token;
    //         setToken(accessToken);
    //         console.log(accessToken);
    //         // 액세스 토큰을 사용하는 로직을 여기에 작성합니다.
    //         // 예를 들어, 상태에 저장하거나, API 요청에 사용하거나, 로컬 스토리지에 저장할 수 있습니다.
    //     })
    //     .catch(error => {
    //         // 오류 처리
    //         console.error('There was an error!', error);
    //     });

    return (
        <HomeContext.Provider value={value}>
            <div>{children}</div>
        </HomeContext.Provider>
    )
}

export default HomeProvider
