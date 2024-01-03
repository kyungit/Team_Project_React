import React, { useContext, useEffect, useRef, useState } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Box from '../Common/Box'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import '../../assets/css/slick-theme.css'
import '../../assets/css/slick.css'

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
    //
    // if (roomInfos4) {
    //     Object.values(roomInfos4).map((roomInfo, index) => {
    //         console.log('index : ', index)
    //         console.log('roomInfo : ', roomInfo)
    //     })
    //
    //     Object.keys(roomInfos4).forEach((key) => {
    //         roomInfos4[key].forEach(({ r_name, r_description }) => {
    //             console.log(`r_name: ${r_name}`)
    //             console.log(`r_description: ${r_description}`)
    //         })
    //     })
    // }
    let roomInfo6 = null
    if (roomInfos && roomInfos.roomInfos6) {
        roomInfo6 = roomInfos.roomInfos6
    }

    const navigate = useNavigate()
    const onReservation = (d_code, r_code) => {
        sessionStorage.setItem('d_code', d_code)
        sessionStorage.setItem('r_code', r_code)

        navigate('/reservation')
    }

    const [isVisible, setIsVisible] = useState(true)

    const PrevArrow = (props) => {
        const { className, onClick } = props
        return (
            isVisible && (
                <img
                    width="500"
                    height="500"
                    className="absolute z-10 w-10 h-10 object-cover bg-blue-400"
                    style={{ left: '0%', top: '0%' }}
                    onClick={() => {
                        onClick()
                    }}
                    src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                    alt="circled-chevron-right"
                />
            )
        )
    }

    const NextArrow = (props) => {
        const { className, onClick } = props
        return (
            isVisible && (
                <img
                    width="32"
                    height="32"
                    className="absolute z-10 w-10 h-10 object-cover bg-red-300"
                    style={{ right: '0%', bottom: '6%', transform: 'scaleX(-1)' }}
                    onClick={() => {
                        onClick()
                    }}
                    src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                    alt="circled-chevron-right"
                />
            )
        )
    }

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const slider1Ref = useRef()
    const slider2Ref = useRef()

    useEffect(() => {
        setNav1(slider1Ref.current)
        setNav2(slider2Ref.current)
    }, [])

    const settings = {
        // className: 'center',
        // centerMode: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    }

    const settings2 = {
        // className: 'center',
        // centerMode: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    }

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {roomInfos4 &&
                Object.values(roomInfos4).map((roomInfos, index) => (
                    <Row key={index} className="w-full h-1000 mt-24">
                        <Column className="w-5/12 m-auto relative">
                            <Slider asNavFor={nav2} ref={slider1Ref} {...settings}>
                                {roomInfos.r_url.map((roomInfo, index) => (
                                    <div key={index} className="">
                                        <img src={roomInfo} className="w-full h-96 rounded-2xl" alt="" />
                                    </div>
                                ))}
                            </Slider>
                            <Slider asNavFor={nav2} ref={slider1Ref} {...settings2}>
                                {roomInfos.r_url.map((roomInfo, index) => (
                                    <div key={index} className="pl-3 pr-3 h-44 mt-6">
                                        <img src={roomInfo} className="w-full h-36 object-fit" alt="" />
                                    </div>
                                ))}
                            </Slider>
                        </Column>
                        <Column className="w-1/2 pl-8">
                            <Row className="text-3xl font-semibold mt-0">{roomInfos.r_name}</Row>
                            <hr className="mt-4 border-b-2 border-b-black" />
                            <Column>{roomInfos.r_description}</Column>
                            <Box className="mt-8">
                                <Column>
                                    <Row className="">
                                        <Row
                                            className="mt-0 text-2xl">{parseInt(roomInfos.r_price).toLocaleString()}원</Row>
                                        {roomInfos.r_status=="O" ?
                                            <button
                                                className="tab-size-4 user-select-text box-border flex items-center justify-center
                                                    h-14 w-1/4 rounded-md text-black font-bold text-lg"
                                                style={{ backgroundColor: '#D9F99D' }}
                                                onClick={() => {
                                                    onReservation(roomInfos.d_code, roomInfos.r_code)
                                                }}
                                            >

                                                예약하기
                                            </button> :
                                            <button
                                                className="tab-size-4 user-select-text box-border flex items-center justify-center
                                                    h-14 w-1/4 rounded-md text-black font-bold text-lg"
                                                style={{ backgroundColor: '#adadad' }}
                                                onClick={() => {
                                                    onReservation(roomInfos.d_code, roomInfos.r_code)
                                                }}
                                                disabled>

                                                예약불가
                                            </button>}

                                    </Row>
                                </Column>
                            </Box>
                        </Column>
                    </Row>
                ))}
        </div>
    )
}
