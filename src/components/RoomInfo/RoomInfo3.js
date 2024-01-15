import React, { useContext } from 'react'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Box from '../Common/Box'

export default function RoomInfo3() {
    const { roomInfos } = useContext(RoomInfoContext)
    let roomInfo6 = null
    let roomInfo7 = null
    if (roomInfos && roomInfos.roomInfos6) {
        roomInfo6 = roomInfos.roomInfos6
    }
    if (roomInfos && roomInfos.roomInfos7) {
        roomInfo7 = roomInfos.roomInfos7
    }

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {roomInfos4 &&
                Object.values(roomInfos4).map((roomInfos, index) => <SliderComponent roomInfos={roomInfos} index={index} onReservation={onReservation} />)}
        </div>
    )
}
