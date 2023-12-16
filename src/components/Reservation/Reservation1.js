import React from 'react'
import MapNaverDefault from '../../api/Map/NaverMap'
import MapKakaoDefault from '../../api/Map/KakaoMap'

export default function Reservation1() {
    return (
        <div className="w-full h-40 pt-16 pl-16">
            <div>Reservation1</div>
            <MapNaverDefault />
            <div className="w-500 h-200">
                <MapKakaoDefault />
            </div>
        </div>
    )
}
