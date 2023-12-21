import React, { useContext } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'

export default function RoomInfo2() {
    const { roomInfos } = useContext(RoomInfoContext)
    let firstRoomInfo = null
    if (roomInfos && roomInfos.roomInfos1) {
        firstRoomInfo = roomInfos.roomInfos1[0]
    }

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {firstRoomInfo && (
                <Column>
                    <Row>More Hotels</Row>
                    <Row className="text-2xl font-semibold">{firstRoomInfo.d_name}</Row>
                    <Row className="mt-1">**2.5-stars**</Row>
                    <Row className="mt-1">{firstRoomInfo.d_road}</Row>
                    <Row className="mt-1">/**100,000**</Row>
                    <Row className="mt-1 w-full">
                        **4,5 35 riviews**/
                        <Row className="mt-0 w-1/3">
                            <div>**찜기능**</div>
                            <div>**공유기능**</div>
                            <div>select a room</div>
                        </Row>
                    </Row>
                    <Row className="w-1/2 h-96 bg-red-400">**</Row>
                </Column>
            )}
        </div>
    )
}
