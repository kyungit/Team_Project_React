import { Button } from '@mui/material'
import React from 'react'
import DataPicker from '../Calender/DataPicker'

export default function Search() {
    return (
        // 1-1. 검색 기능 : 이름, 장소, 연관 단어
        <div className="w-full h-80 pt-32 flex flex-row">
            <div className="w-full flex flex-row justify-center">
                <div className="w-4/5 h-20 bg-lime-200 flex flex-row text-center items-center">
                    <Button></Button>
                    <div className="w-1/3">
                        <input className="relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20" />
                    </div>
                    <div className="ml-4 w-1/3">
                        <DataPicker />
                    </div>
                    <div className="ml-4 w-1/3">
                        <input className="relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20" />
                    </div>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}
