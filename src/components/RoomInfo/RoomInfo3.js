import React, { useContext, useEffect, useState } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Box from '../Common/Box'

export default function RoomInfo3() {
    const { roomInfos } = useContext(RoomInfoContext)
    const [roomInfos4, setRoomInfos4] = useState(null)
    useEffect(() => {
        if (roomInfos.roomInfos4) {
            setRoomInfos4(roomInfos.roomInfos4)
        }
    }, [roomInfos])
    console.log('roomInfos4 : ', roomInfos4)
    // console.log('roomInfos4 : ', roomInfos4["228417"])

    if (roomInfos4) {
        Object.values(roomInfos4).map((roomInfo, index) => {
            console.log('index : ', index)
            console.log('roomInfo : ', roomInfo)
        })
    }


    const [current, setCurrent] = useState(0);
    const [slideStart, setSlideStart] = useState(0);

    const handleNext = () => {
        console.log('current : ', current)
        if (current < roomInfos.length - 1) {
            setCurrent(prevCurrent => prevCurrent + 1);
        }
        if (current >= 2) {
            setSlideStart(prevSlideStart => prevSlideStart + 1);
        }
    }

    const handlePrev = () => {
        if (current > 0) {
            setCurrent(prevCurrent => prevCurrent - 1);
        }
        if (current - slideStart > 0) {
            setSlideStart(prevSlideStart => prevSlideStart - 1);
        }
    }

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {roomInfos4 &&
                Object.values(roomInfos4).map((roomInfos, index) => (
                    <Row key={index} className='w-full h-1000 mt-36'>
                        <Column className='w-1/2'>
                            {/* {roomInfos && roomInfos.map((roomInfo, index) => (
                                <div key={index} className='w-full h-1000'>
                                    <img src={roomInfo.r_url} className='w-full h-auto'></img>
                                </div>
                            ))} */}
                            <img src={roomInfos[current].r_url} className='w-full h-auto' />
                            <div className='flex mt-4'>
                                <button onClick={() => { handlePrev() }} disabled={current === 0}>←</button>
                                {roomInfos.slice(slideStart, slideStart + 4).map((roomInfo, index) => (
                                    <img key={index} src={roomInfo.r_url} className='pl-2 w-1/4 h-auto' />
                                ))}
                                <button onClick={() => { handleNext() }} className='pl-2' disabled={current === roomInfos.length - 1}>→</button>
                            </div>
                        </Column>
                        <Column className='w-1/2 pl-8'>

                            <Row className="text-3xl font-semibold mt-0">{roomInfos[0].r_name}</Row>
                            <hr className="mt-4 border-b-2 border-b-black" />
                            <Column >{roomInfos[0].r_description}</Column>
                            <Box className="mt-8">
                                <Column>
                                    <Row className="">
                                        <Row className='mt-0 text-2xl'>{roomInfos[0].r_price}원</Row>
                                        <button
                                            className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-1/4 rounded-md text-black font-bold text-lg"
                                            style={{ backgroundColor: '#D9F99D' }}
                                        >
                                            예약하기
                                        </button>
                                    </Row>
                                    <Row>**Free cancellation before Tue, Dec 26**</Row>
                                </Column>
                            </Box>
                        </Column>

                    </Row>
                ))}
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

                            </Column>
                        </Row> */}
            {' '}
        </div>
        //         })}
        // </div>
    )
}
