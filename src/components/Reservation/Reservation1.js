import React from 'react'
import MapNaverDefault from '../../api/NaverMap'
import MapKakaoDefault from '../../api/KakaoMap'

export default function Reservation1() {
    return (
        <div className="w-full h-40 pt-16 pl-16">
            <div>Reservation1</div>
            <MapNaverDefault />
            <MapKakaoDefault />
        </div>
    )
}
