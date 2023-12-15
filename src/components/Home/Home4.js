import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'

export default function Home4() {
    const data = useContext(ImageContext)
    const images = data.images4
    // console.log('images4 : ', images)
    return <RoomImageSlide image_length="6" images={images} />
}
