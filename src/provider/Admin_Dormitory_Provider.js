import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'
import SearchListContext from '../context/SearchList_Context'

const Provider = ({ children }) => {
    const [images, setImages] = useState({
        searchlist1: [],
    })

    const [searchdata, setSearchdata] = useState({
        keyword: null,
        startDate: null,
        endDate: null,
        guest: null,
        type: [],
        star: [],
    })

    const navigate = useNavigate()

    useEffect(() => {
        console.log(searchdata.keyword, searchdata.startDate, searchdata.endDate, searchdata.guest)
    }, [searchdata])

    const onSubmitSearch = useCallback(() => {
        setImages((prevItems) => ({
            ...prevItems,
            searchlist1: [], // or some default value
        }))
        navigate('/searchList')
    }, [])

    const GetSearchList = useCallback(
        async (pageNum) => {
            const result1 = await axios.post(`http://localhost:8080/searchList/dormitory?pageNum=${pageNum}`, searchdata)

            console.log('result1 : ', result1)
            console.log('searchdata.type', searchdata.type)
            console.log('searchdata.star', searchdata.star)
            // setImages((prevItems) => ({
            //     searchlist1: [...prevItems.searchlist1, result1.data],
            // }))
            return result1.data
        },
        [searchdata],
    )

    // 호텔 정보 변경 함수 추가
    const updateHotelInfo = useCallback(
        async (hotelId, newInfo) => {
            try {
                const response = await axios.put(`http://localhost:8080/hotels/${hotelId}`, newInfo);
                console.log(response.data); // 성공적으로 업데이트된 정보 출력
            } catch (error) {
                console.error(error);
            }
        },
        []
    );

    // 예약 변경/삭제 함수 추가
    const modifyReservation = useCallback(
        async (reservationId, newReservation) => {
            try {
                const response = await axios.put(`http://localhost:8080/reservations/${reservationId}`, newReservation);
                console.log(response.data); // 성공적으로 변경된 예약 정보 출력
            } catch (error) {
                console.error(error);
            }
        },
        []
    );

    const value = useMemo(
        () => ({
            images,
            setImages,
            searchdata,
            setSearchdata,
            GetSearchList,
            onSubmitSearch,
            updateHotelInfo, // 추가된 호텔 정보 변경 함수
            modifyReservation // 추가된 예약 변경/삭제 함수
        }),
        [images, setImages, searchdata, setSearchdata, GetSearchList, onSubmitSearch, updateHotelInfo, modifyReservation]
    )

    return (
        <Context.Provider value={value}>
            <div>{children}</div>
        </Context.Provider>
    )
}

export default Provider
