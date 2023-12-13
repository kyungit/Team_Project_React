import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'

export default function Home1() {
    const data = useContext(ImageContext)
    const images = data.images1
    console.log('images1 : ', images)
    return <RoomImageSlide image_length="3" images={images} />
}
