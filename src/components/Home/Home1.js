import React, { useContext, useEffect, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'
import Slider from 'react-slick'
import './slick-theme.css'
import './slick.css'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'
import Row from '../Common/Row'
import { useLocation } from 'react-router-dom'
const PrevArrow = (props) => {
    const { className, onClick } = props
    return (
        <img
            width="64"
            height="64"
            className="absolute z-10 w-20 h-20"
            style={{ left: '5%', top: '50%' }}
            onClick={onClick}
            src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
            alt="circled-chevron-right"
        />
    )
}

const NextArrow = (props) => {
    const { className, onClick } = props
    return (
        <img
            width="64"
            height="64"
            className="absolute z-10 w-20 h-20"
            style={{ right: '5%', bottom: '33%', transform: 'scaleX(-1)' }}
            onClick={onClick}
            src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
            alt="circled-chevron-right"
        />
    )
}

export default function Home1() {
    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '345px',
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }
    const images = [beach, bird, butterfly, forest, mountain]
    return (
        <div className="col-start-1 col-end-13 w-full h-auto pt-16 mt-24 relative">
            <Row className="pl-9 text-3xl font-bold w-full">/추천 숙소 여행지/</Row>
            <Slider {...settings}>
                {images &&
                    images.map((image) => (
                        <div className="pl-2 pr-2 w-92 h-64 mt-8">
                            <img className="w-full h-full object-fit rounded-2xl" src={image} alt="" />
                            <Row className="mt-4 text-xs text-gray-500">/4.5성급 - 서울특별시, 대한민국/</Row>
                            <Row className="mt-0 text-lg font-bold">/신라스테이 역삼/</Row>
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
