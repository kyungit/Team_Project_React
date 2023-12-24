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

    const value = useMemo(
        () => ({ images, setImages, searchdata, setSearchdata, GetSearchList, onSubmitSearch }),
        [images, setImages, searchdata, setSearchdata, GetSearchList, onSubmitSearch],
    )

    return (
        <Context.Provider value={value}>
            <div>{children}</div>
        </Context.Provider>
    )
}

export default Provider
