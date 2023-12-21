import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'
import Row from '../Common/Row'
import Column from '../Common/Column'

export default function Home1() {
    const data = useContext(ImageContext)
    // const images = data.images1
    // console.log('images1 : ', images)
    // return <RoomImageSlide className="col-start-3 col-end-11 w-full h-auto pt-16" image_length="3" images={images} />
    const images = ['1', '2', '3', '4', '5', '6']
    return (
        <div className="col-start-3 col-end-11 w-full h-auto pt-16">
            <Row>
                {images &&
                    images.map((image, index) => (
                        <Column>
                            <Row>국내 지역 여행지</Row>
                            <Row>
                                <img src={image} className=" w-40 h-40 bg-orange-200" alt="" />
                            </Row>
                            <Row>제주</Row>
                        </Column>
                    ))}
            </Row>
        </div>
    )
}
