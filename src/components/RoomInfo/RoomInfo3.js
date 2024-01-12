import React, { useContext, useEffect, useRef, useState } from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Box from '../Common/Box'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import '../../assets/css/slick-theme.css'
import '../../assets/css/slick.css'
// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "..//../../node_modules/slick-carousel/slick/slick-theme.css";
import mountain from '../../assets/img/mountain.jpg'

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

    // const [nav1, setNav1] = useState(null)
    // const [nav2, setNav2] = useState(null)
    // const slider1Ref = useRef()
    // const slider2Ref = useRef()

    // useEffect(() => {
    //     setNav1(slider1Ref.current)
    //     setNav2(slider2Ref.current)
    // }, [])

    // const settings = {
    //     // className: 'center',
    //     // centerMode: true,
    //     lazyLoad: true,
    //     dots: true,
    //     infinite: true,
    //     speed: 2000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     prevArrow: <PrevArrow />,
    //     nextArrow: <NextArrow />,
    //     // autoplay: true,
    //     // autoplaySpeed: 2000,
    //     // cssEase: "linear"
    // }

    // const settings2 = {
    //     // className: 'center',
    //     // centerMode: true,
    //     lazyLoad: true,
    //     dots: true,
    //     infinite: true,
    //     speed: 2000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     prevArrow: <PrevArrow />,
    //     nextArrow: <NextArrow />,
    //     // autoplay: true,
    //     // autoplaySpeed: 2000,
    //     // cssEase: "linear"
    // }

    const slider1 = useRef()
    const slider2 = useRef()

    useEffect(() => {
        if (slider1.current && slider2.current) {
            slider1.current.slickGoTo(slider2.current.innerSlider.state.currentSlide)
            slider2.current.slickGoTo(slider1.current.innerSlider.state.currentSlide)
        }
    }, [])

    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {roomInfos4 &&
                Object.values(roomInfos4).map((roomInfos, index) => (
                    <SliderComponent key={index} roomInfos={roomInfos} index={index} onReservation={onReservation} />
                ))}
        </div>
    )
}

const SliderComponent = ({ roomInfos, index, onReservation }) => {
    const slider1 = useRef()
    const slider2 = useRef()
    const [centerPadding, setCenterPadding] = useState('40px')
    const extendedRoomInfos = [roomInfos.r_url[roomInfos.r_url.length - 1], ...roomInfos.r_url, roomInfos.r_url[0], roomInfos.r_url[1]]

    // useEffect(() => {
    //     setCenterPadding('10px')
    // }, [])

    return (
        <Row key={index} className="w-full h-1000 mt-36">
            <Column className="w-1/2">
                <Slider
                    asNavFor={slider2.current}
                    ref={(slider) => (slider1.current = slider)}
                    beforeChange={(current, next) => {
                        // if (next >= roomInfos.r_url.length) {
                        //     setTimeout(() => slider1.current.slickGoTo(0), 0)
                        // }
                        slider2.current.slickGoTo(next)
                    }}
                >
                    {extendedRoomInfos.map((roomInfo, index) => (
                        <div key={index} className="h-112">
                            <img src={roomInfo} className="w-full h-full rounded-2xl" alt="" />
                        </div>
                    ))}
                </Slider>
                <Slider
                    asNavFor={slider1.current}
                    ref={(slider) => (slider2.current = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    infinite={true}
                    lazyLoad={true}
                    centerPadding={centerPadding}
                    beforeChange={(current, next) => {
                        // if (next >= extendedRoomInfos.length) {
                        //     setTimeout(() => slider2.current.slickGoTo(0), 0)
                        // }
                        slider1.current.slickGoTo(next)
                    }}
                >
                    {extendedRoomInfos.map((roomInfo, index) => (
                        <>
                            <div key={index} className="h-32">
                                <img src={roomInfo} className="pl-1 pr-1 w-full h-full object-fill rounded-xl" alt="" />
                            </div>
                        </>
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
                            <Row className="mt-0 text-2xl">{parseInt(roomInfos.r_price).toLocaleString()}원</Row>
                            {roomInfos.r_status == 'O' ? (
                                <button
                                    className="tab-size-4 user-select-text box-border flex items-center justify-center
                    h-14 w-1/4 rounded-md text-black font-bold text-lg"
                                    style={{ backgroundColor: '#D9F99D' }}
                                    onClick={() => {
                                        onReservation(roomInfos.d_code, roomInfos.r_code)
                                    }}
                                >
                                    예약하기
                                </button>
                            ) : (
                                <button
                                    className="tab-size-4 user-select-text box-border flex items-center justify-center
                    h-14 w-1/4 rounded-md text-black font-bold text-lg"
                                    style={{ backgroundColor: '#adadad' }}
                                    onClick={() => {
                                        onReservation(roomInfos.d_code, roomInfos.r_code)
                                    }}
                                    disabled
                                >
                                    예약불가
                                </button>
                            )}
                        </Row>
                    </Column>
                </Box>
            </Column>
        </Row>
    )
}
