import { Button } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import DataPicker from '../Calender/DataPicker'
import SearchListContext from '../../context/SearchList_Context'
import HomeContext from '../../context/Home_Context'
import Context from '../../context/Context'

export default function Search2() {
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

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [rooms, setRooms] = useState([
        {
            adults: 1,
            children: 0,
            childAge: null,
        },
    ])

    const handleGuestChange = (index, type, value) => {
        const newRooms = [...rooms]
        newRooms[index][type] = value
        setRooms(newRooms)
    }

    const addRoom = () => {
        setRooms([
            ...rooms,
            {
                adults: 1,
                children: 0,
                childAge: null,
            },
        ])
    }

    const removeRoom = (index) => {
        const newRooms = [...rooms]
        newRooms.splice(index, 1)
        setRooms(newRooms)
    }

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
                        onClick={() => setIsModalOpen(true)}
                    />
                    {isModalOpen && (
                        <div className="modal">
                            {rooms.map((room, index) => (
                                <div key={index}>
                                    <div>Room(s) {index + 1}</div>
                                    <div>
                                        Adults
                                        <button
                                            disabled={room.adults === 1}
                                            onClick={() => handleGuestChange(index, 'adults', room.adults - 1)}
                                        >
                                            -
                                        </button>
                                        {room.adults}
                                        <button onClick={() => handleGuestChange(index, 'adults', room.adults + 1)}>
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        Children
                                        <button
                                            disabled={room.children === 0}
                                            onClick={() => handleGuestChange(index, 'children', room.children - 1)}
                                        >
                                            -
                                        </button>
                                        {room.children}
                                        <button onClick={() => handleGuestChange(index, 'children', room.children + 1)}>
                                            +
                                        </button>
                                    </div>
                                    {room.children > 0 && (
                                        <select
                                            value={room.childAge}
                                            onChange={(e) => handleGuestChange(index, 'childAge', e.target.value)}
                                        >
                                            <option value="">나이를 선택해주세요</option>
                                            {Array.from({ length: 15 }, (_, i) => i + 1).map((age) => (
                                                <option key={age} value={age}>
                                                    {age}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {rooms.length > 1 && <button onClick={() => removeRoom(index)}>Remove Room</button>}
                                </div>
                            ))}
                            <button onClick={addRoom}>Add a Room</button>
                            <button onClick={() => setIsModalOpen(false)}>Done</button>
                        </div>
                    )}
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
