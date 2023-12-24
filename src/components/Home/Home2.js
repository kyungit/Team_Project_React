import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'
import Row from '../Common/Row'
import Column from '../Common/Column'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'
import vine from '../../assets/img/vine.jpg'
import Slider from 'react-slick'
import './slick-theme.css'
import './slick.css'

export default function Home2() {
    const [isVisible, setIsVisible] = useState(true)

    const PrevArrow = (props) => {
        const { className, onClick } = props
        return (
            !isVisible && (
                <img
                    width="64"
                    height="64"
                    className="absolute z-10  w-10 h-10 object-cover"
                    style={{ left: '1%', top: '61%' }}
                    onClick={() => {
                        onClick()
                        setIsVisible(true)
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
                    className="absolute z-10 w-10 h-10 object-cover"
                    style={{ right: '1%', bottom: '28%', transform: 'scaleX(-1)' }}
                    onClick={() => {
                        onClick()
                        setIsVisible(false)
                    }}
                    src="https://www.tripbtoz.com/images/main/bg_btn_mGroup2_arr.svg"
                    alt="circled-chevron-right"
                />
            )
        )
    }
    const settings = {
        // className: 'center',
        // centerMode: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    }
    const images = [mountain, vine, beach, bird, butterfly, forest, mountain, vine, beach, bird, butterfly, forest]
    return (
        <div className="col-start-2 col-end-12 w-full h-auto pt-16 pl-6 pr-6 mt-32 relative">
            <Row className="pl-3 text-3xl font-bold w-full">/국내 지역 여행지/</Row>
            <Slider {...settings}>
                {images &&
                    images.map((image, index) => (
                        <div key={index} className="pl-3 pr-3 w-44 h-44 mt-8">
                            <img className="w-full h-full object-fit rounded-2xl" src={image} alt="" />
                            <Row className="mt-2 text-sm">제주</Row>
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
