import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import axios from 'axios'
import SearchListContext from '../context/SearchList_Context'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const SearchListProvider = ({ children }) => {
    // const [images, setImages] = useState({
    //     searchlist1: [],
    // })

    // const { searchdata } = useContext(Context)

    // const [type, setType] = useState([])
    // const [star, setStar] = useState([])

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

    // const GetSearchList = useCallback(
    //     async (pageNum) => {
    //         const result1 = await axios.get(`http://localhost:8080/searchList/dormitory?pageNum=${pageNum}&type=${type}&star=${star}`, { params: searchdata })

    //         console.log('result1 : ', result1)
    //         console.log('type : ', type)
    //         console.log('star : ', star)
    //         return result1.data
    //     },
    //     [searchdata, type, star],
    // )

    // useEffect(() => {
    //     GetSearchList(1)
    // }, [GetSearchList])

    // const value = useMemo(() => ({ images, setImages, GetSearchList, setStar, setType }), [images, setImages, GetSearchList, setStar, setType])

    return <SearchListContext.Provider>{children}</SearchListContext.Provider>
}

export default SearchListProvider
