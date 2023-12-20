import { Button } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import DataPicker from '../Calender/DataPicker'
import SearchListContext from '../../context/SearchList_Context'
import HomeContext from '../../context/Home_Context'
import Context from '../../context/Context'

export default function Search() {
    // const { images, searchdata, setSearchdata, onSubmitSearch } = useContext(HomeContext)
    const { searchdata, setSearchdata, onSubmitSearch } = useContext(Context)
    // const { images, searchdata, setSearchdata, onSubmitSearch } = useContext(SearchListContext)
    const { keyword, startDate, endDate, guest } = searchdata

    const onKeywordChange = useCallback((e) => {
        setSearchdata((searchdata) => ({
            ...searchdata,
            keyword: e.target.value,
        }))
        if (e) {
            // console.log('onKeywordChange : ', searchdata)
        }
    }, [])

    const onGuestChange = useCallback((e) => {
        setSearchdata((searchdata) => ({
            ...searchdata,
            guest: e.target.value,
        }))
        if (e) {
            // console.log('onGuestChange : ', searchdata)
        }
    }, [])

    useEffect(() => {
        console.log(searchdata)
    }, [searchdata])

    return (
        // 1-1. 검색 기능 : 이름, 장소, 연관 단어
        <div className="col-start-3 col-end-11 w-full h-auto pt-16">
            <div
                className="
                 z-10 flex h-16 flex-row items-center rounded-full bg-white shadow-md"
            >
                <div className="w-1/3 sm:w-133 md:w-108">
                    <input
                        type="search"
                        id="default-search"
                        className="p-8 bg-transparent inline-block h-auto w-full overflow-ellipsis border-none text-gray-800 caret-green-500 placeholder-gray-400 focus:placeholder-gray-100 left-8 top-1 z-20 cursor-pointer leading-normal outline-none"
                        placeholder="숙소를 검색하세요"
                        required
                        onChange={onKeywordChange}
                    />
                </div>
                <div className="relative ml-4 w-1/3">
                    <DataPicker />
                </div>
                <div className="w-1/3 sm:w-133 md:w-108 flex flex-row justify-evenly items-center">
                    <input
                        type="search"
                        id="default-search"
                        className="p-4 bg-transparent inline-block h-auto overflow-ellipsis border-none text-gray-800 caret-green-500 placeholder-gray-400 focus:placeholder-gray-100 left-8 top-1 z-20 cursor-pointer leading-normal outline-none"
                        placeholder="인원을 입력하세요"
                        required
                        onChange={onGuestChange}
                    />
                    <button
                        type="submit"
                        className="text-black end-2.5 bottom-2.5 h-10 bg-lime-100 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => onSubmitSearch()}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
