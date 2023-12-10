import React, { useEffect, useState } from 'react'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'

export default function Home1() {
    const images = [beach, bird, butterfly, forest, mountain]

    const [currentImgIndex, setCurrentImgIndex] = useState(1)
    const [style, setStyle] = useState({
        transform: `translateX(-${currentImgIndex}00%)`,
        transition: `all 0.4s ease-in-out`,
    })

    // 처음과 끝에 더미 슬라이드 추가
    const [imageList, setImageList] = useState([
        images[images.length - 1],
        ...images,
        images[0],
    ])

    const nextSlide = () => {
        setCurrentImgIndex(currentImgIndex + 1)
        setStyle({
            transform: `translateX(-${currentImgIndex + 1}00%)`,
            transition: `all 0.4s ease-in-out`,
        })
    }

    const prevSlide = () => {
        setCurrentImgIndex(currentImgIndex - 1)
        setStyle({
            transform: `translateX(-${currentImgIndex - 1}00%)`,
            transition: `all 0.4s ease-in-out`,
        })
    }

    useEffect(() => {
        if (currentImgIndex === 0) {
            setCurrentImgIndex(imageList.length - 2)
            setTimeout(function () {
                setStyle({
                    transform: `translateX(-${imageList.length - 2}00%)`,
                    transition: '0ms',
                })
            }, 400)
        }

        if (currentImgIndex === imageList.length - 1) {
            setCurrentImgIndex(1)
            setTimeout(() => {
                setStyle({
                    transform: `translateX(-100%)`,
                    transition: '0ms',
                })
            }, 400)
        }
    }, [currentImgIndex, imageList.length])

    return (
        <div className="w-full h-80 pt-16">
            <button onClick={prevSlide}>이전</button>
            <div className="flex flex-col items-center">
                <div>Explore dreamy places</div>
                <div className=" w-full flex flex-row justify-around">
                    <div className="flex flex-row" style={style}>
                        {imageList?.map((el, i) => {
                            return (
                                <div className="w-60 h-40" key={i}>
                                    <img
                                        src={el}
                                        className="w-auto h-auto object-contain"
                                        alt=""
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <button onClick={nextSlide}>다음</button>
        </div>
    )
}
