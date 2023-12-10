import { Button } from '@mui/material'
import React from 'react'

export default function Search() {
    return ( // 1-1. 검색 기능 : 이름, 장소, 연관 단어
        <div className="w-full h-80 pt-32 flex flex-row">
            <div className="w-full flex flex-row justify-center">
                <div className="w-4/5 h-20 bg-lime-200 flex flex-row text-center items-center">
                    <div className="w-1/3">where are you going</div>
                    <div className="w-1/3">calender</div>
                    <div className="w-1/3">Room(s), Guest(s)</div>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}
