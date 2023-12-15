import { useEffect, useState } from 'react'
import { Map, MapInfoWindow, MapMarker } from 'react-kakao-maps-sdk'

export default function KakaoMap() {
    const { kakao } = window
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()

    useEffect(() => {
        if (!map) return
        const ps = new kakao.maps.services.Places()

        // 현재 지도의 범위를 가져옵니다.
        const bounds = map.getBounds()
        // 검색 옵션을 설정합니다. 이 경우, 지도의 현재 범위 내에서 검색되도록 설정했습니다.
        const options = { bounds: bounds }

        ps.keywordSearch(
            '안녕',
            (data, status, _pagination) => {
                if (status === kakao.maps.services.Status.OK) {
                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    let markers = []

                    for (var i = 0; i < 10; i++) {
                        // @ts-ignore
                        markers.push({
                            position: {
                                lat: data[i].y,
                                lng: data[i].x,
                            },
                            content: data[i].place_name,
                        })
                        // @ts-ignore
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                    }
                    setMarkers(markers)

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                    map.setBounds(bounds)
                }
            },
            options,
        )
    }, [map])

    return (
        <Map // 로드뷰를 표시할 Container
            center={{
                lat: 37.566826,
                lng: 126.9786567,
            }}
            style={{
                width: '100%',
                height: '350px',
            }}
            level={3}
            onCreate={setMap}
        >
            {markers.map((marker) => (
                <MapMarker
                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                    position={marker.position}
                    onClick={() => setInfo(marker)}
                >
                    {info && info.content === marker.content && (
                        <div style={{ color: '#000' }}>{marker.content}</div>
                    )}
                </MapMarker>
            ))}
        </Map>
    )
}
