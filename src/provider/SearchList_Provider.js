import React, { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import SearchListContext from '../context/SearchList_Context'

const SearchListProvider = ({ children }) => {
    const [images, setImages] = useState({
        searchlist1: [],
    })

    const GetSearchList = useCallback(async (page) => {
        const ImagesAPI = async (page) => {
            const result1 = await axios.get(
                `http://localhost:8080/searchList/dormitory?page=${page}`,
                // `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 10}&_limit=10`
            )
            setImages({
                searchlist1: result1.data,
            })

            console.log('result1 : ', result1)
            return result1.data
        }

        return await ImagesAPI(page)
    }, [])

    useEffect(() => {
        GetSearchList()
    }, [GetSearchList])

    const value = useMemo(() => ({ images, setImages, GetSearchList }), [images, GetSearchList])

    return <SearchListContext.Provider value={value}>{children}</SearchListContext.Provider>
}

export default SearchListProvider
