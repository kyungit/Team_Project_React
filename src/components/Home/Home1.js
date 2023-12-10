import React from 'react'
import { randomAvatar } from '../../data'

export default function Home1() {
    return (
        // 1-2. 왼쪽 오른쪽 옮기기 기능
        <div className="w-full h-80 pt-16">
            <div className="flex flex-col items-center">
                <div>Explore dreamy places</div>
                <div className=" w-full flex flex-row justify-around">
                    <div className="flex flex-col items-center">
                        <div className="w-60 h-40 bg-red-300"></div>
                        {randomAvatar}
                        <div>seoul</div>
                        <div>hotel</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-60 h-40 bg-red-300"></div>
                        <div>seoul</div>
                        <div>hotel</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-60 h-40 bg-red-300"></div>
                        <div>seoul</div>
                        <div>hotel</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
