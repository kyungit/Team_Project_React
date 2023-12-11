import React from 'react'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'

export default function Home3() {
    const images = [
        beach,
        bird,
        butterfly,
        forest,
        mountain,
        // beach,
        // bird,
        // butterfly,
    ]
    return (
        // 1-3. 괜찮은 숙소
        <div className="w-full h-160 pt-16">
            <div className="flex flex-col items-center">
                <div>Explore dreamy places</div>
                <div className=" w-full flex flex-row justify-around flex-wrap">
                    {images?.map((image, i) => {
                        return (
                            <div key={i} className="flex flex-col items-center">
                                <img src={image} className="w-80 h-40" alt="" />
                                <div>seoul</div>
                                <div>hotel</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
