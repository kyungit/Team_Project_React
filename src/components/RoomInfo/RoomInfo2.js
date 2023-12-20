import React from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'

export default function RoomInfo2() {
    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            <Column>
                <Row>More Hotels</Row>
                <Row className="text-2xl font-semibold">Hotel DM</Row>
                <Row className="mt-1">2.5-stars</Row>
                <Row className="mt-1">jongno-gu, Seoul</Row>
                <Row className="mt-1">/100,000</Row>
                <Row className="mt-1 w-full">
                    4,5 35 riviews/
                    <Row className="mt-0 w-1/4">
                        <div>찜기능</div>
                        <div>공유기능</div>
                        <div>select a room</div>
                    </Row>
                </Row>
                <Row className="w-3/5 h-80 bg-red-400"></Row>
            </Column>
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
