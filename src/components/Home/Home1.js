import React, { useEffect, useState } from 'react'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'
import Swiper from 'react-id-swiper'

export default function Home1() {
    const images = [beach, bird, butterfly, forest, mountain]

    return (
        <>
            <div className="w-full h-80 pt-16">
                <div className="flex flex-col items-center">
                    <div>Explore dreamy places</div>
                    <div className=" w-full flex flex-row">
                        {images?.map((image, i) => {
                            return (
                                <div key={i} className="flex flex-row ">
                                    <img
                                        src={image}
                                        className="w-60 h-40"
                                        alt=""
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
