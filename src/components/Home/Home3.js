import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'

export default function Home3() {
    const data = useContext(ImageContext)
    const images = data.images3
    // console.log('images3 : ', images)
    return <RoomImageSlide image_length="5" images={images} />
}
