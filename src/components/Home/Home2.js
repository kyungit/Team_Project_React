import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'

export default function Home2() {
    const data = useContext(ImageContext)
    const images = data.images2
    // console.log('images2 : ', images)
    return <RoomImageSlide image_length="4" images={images} />
}
