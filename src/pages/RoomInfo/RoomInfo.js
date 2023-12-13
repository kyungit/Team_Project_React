import React, { useState } from 'react'
import RoomInfo1 from '../../components/RoomInfo/RoomInfo1'
import RoomInfo2 from '../../components/RoomInfo/RoomInfo2'
import RoomInfo3 from '../../components/RoomInfo/RoomInfo3'
import RoomInfo4 from '../../components/RoomInfo/RoomInfo4'
import axios from 'axios'
import RoomInfoProvider from '../../provider/RoomInfo_Provider'

export default function Reservation() {
    return (
        <RoomInfoProvider className="grid grid-cols-12 h-auto">
            <RoomInfo1 />
            <RoomInfo2 />
            <RoomInfo3 />
            <RoomInfo4 />
        </RoomInfoProvider>
    )
}
