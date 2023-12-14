import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function RoomInfo1() {
    const [dormitorys, setDormitorys] = useState(null)
    const getApi = async () => {
        await axios.get('http://localhost:8080/room/roomDetail').then((res) => {
            setDormitorys(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <div className="col-start-3 col-end-11 w-full h-1000 pt-16">
            <div className="flex flex-col">
                {dormitorys &&
                    dormitorys.map((dormitory, index) => (
                        <div key={index}>
                            <div>{dormitory.d_code}</div>
                            <div>{dormitory.r_code}</div>
                            <div>{dormitory.r_name}</div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row">
                                    <div>Review</div>
                                    <div></div>
                                </div>
                                <div className="flex flex-row ">
                                    <div>save</div>
                                    <div>share</div>
                                    <button className="w-10 h-10 bg-blue-300"> </button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="w-3/5 h-80">
                                    <img src={dormitory.r_img} alt="" />
                                </div>
                                <div className="ml-4 w-2/5 h-80 flex flex-col">
                                    <div className="w-100 h-60 bg-blue-400"></div>
                                    <div className="w-100 h-60 bg-blue-400"></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
