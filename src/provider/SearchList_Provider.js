import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchListContext from '../context/SearchList_Context'

const SearchListProvider = ({ children }) => {
    const [images, setImages] = useState({
        searchlist1: null,
    })

    useEffect(() => {
        const ImagesAPI = async () => {
            const result1 = await axios.get(
                'http://localhost:8080/searchList/dormitory',
            )
            setImages({
                searchlist1: result1.data,
            })

            console.log('result1 : ', result1)
        }

        ImagesAPI()
    }, [])

    return (
        <SearchListContext.Provider value={images}>
            {children}
        </SearchListContext.Provider>
    )
}

export default SearchListProvider
