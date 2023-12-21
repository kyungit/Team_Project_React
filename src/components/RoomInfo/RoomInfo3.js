import React, { useContext } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import Box from '../Common/Box'
import RoomInfoContext from '../../context/RoomInfo_Context'

export default function RoomInfo3() {
    const { roomInfos } = useContext(RoomInfoContext)
    const data = roomInfos.roomInfos4
    console.log('data123 : ', data)
    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {data &&
                data.forEach((key, value) => {
                    console.log(key)
                })}
            {/* {roomInfos.roomInfos4 &&
                roomInfos.roomInfos4.forEach((listofRoomInfo, key) => {
                    ;<div key={key} className="mt-36">
                        console.log(${key}) */}
            {/* <Row>
                            <img src={roomInfo.r_img} className="w-1/2  h-96 bg-red-400 rounded-3xl" alt="" />

                            <Column className="w-1/2 pl-10">
                                <Row className="text-2xl font-semibold">{roomInfo.r_name}</Row>
                                <hr className="mt-4 border-b-2 border-b-black" />
                                <Row className="">**For 2, Sleeps 2, 45㎡**</Row>
                                <Row className="mt-0">**1 King Bed**</Row>

                                <Box className="mt-8">
                                    <Row className="text-xl">
                                        **100,000원** /
                                        <button
                                            className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-1/4 rounded-md text-black font-bold text-lg"
                                            style={{ backgroundColor: '#D9F99D' }}
                                        >
                                            예약하기
                                        </button>
                                    </Row>
                                    <Row>**Free cancellation before Tue, Dec 26**</Row>
                                </Box>
                            </Column>
                        </Row> */}
            //{' '}
        </div>
        //         })}
        // </div>
    )
}
