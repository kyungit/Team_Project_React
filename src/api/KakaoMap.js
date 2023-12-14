import { useEffect, useRef } from 'react'

const MapKakaoDefault = () => {
    const { kakao } = window

    useEffect(() => {
        const container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
            level: 3,
            draggable: true,
            scrollwheel: true,
        }

        const map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

        const setCenter = () => {
            // 이동할 위도 경도 위치를 생성합니다
            const moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888)

            // 지도 중심을 이동 시킵니다
            map.setCenter(moveLatLon)
        }

        const panTo = () => {
            // 이동할 위도 경도 위치를 생성합니다
            var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942)

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.panTo(moveLatLon)
        }

        // 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다
        const points = [
            new kakao.maps.LatLng(33.452278, 126.567803),
            new kakao.maps.LatLng(33.452671, 126.574792),
            new kakao.maps.LatLng(33.451744, 126.572441),
        ]

        // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
        const bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < points.length; i++) {
            // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
            let marker = new kakao.maps.Marker({ position: points[i] })
            marker.setMap(map)

            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(points[i])
        }

        const setBounds = () => {
            map.setBounds(bounds)
        }

        setCenter()
        panTo()
        setBounds()
    }, [])

    return (
        <>
            <h1>Kakao Map - Default</h1>
            <div id="map" style={{ width: '500px', height: '500px' }}></div>
        </>
    )
}

export default MapKakaoDefault
