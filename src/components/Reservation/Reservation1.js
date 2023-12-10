import React from 'react'

export default function Reservation1() {
    return (
        <div className="col-start-3 col-end-11 w-full h-1000 pt-16">
            <div className="flex flex-col">
                <div>The Composition of Las Vagas</div>
                <div>5 stars</div>
                <div>location : Seoul</div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <div>Review</div>
                        <div>20 images</div>
                    </div>
                    <div className="flex flex-row ">
                        <div>save</div>
                        <div>share</div>
                        <button className="w-10 h-10 bg-blue-300"> </button>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="w-3/5 h-80 bg-red-400"></div>
                    <div className="ml-4 w-2/5 h-80 flex flex-col">
                        <div className="w-100 h-60 bg-blue-400"></div>
                        <div className="w-100 h-60 bg-blue-400"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
