import React from 'react'

export default function RoomInfo2() {
    return (
        <div className="col-start-3 col-end-11 w-full h-1000 pt-16">
            <div className="flex flex-row">
                <div className="w-1/2 h-auto flex flex-col">
                    <div className="h-80 bg-red-400"></div>
                    <div className="flex flex-row mt-5 justify-around">
                        <div className="w-1/5 h-20 bg-red-400"></div>
                        <div className="w-1/5 h-20 bg-red-400"></div>
                        <div className="w-1/5 h-20 bg-red-400"></div>
                        <div className="w-1/5 h-20 bg-red-400"></div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col">
                    <div>City Room. 2 Queen Beds</div>
                    <div className="flex flex-row justify-between">
                        <div>information</div>
                        <div>more details</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>1,000,000</div>
                        <div className="w-20 h-10 bg-blue-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
