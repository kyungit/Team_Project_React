import React from 'react'
import Row from '../Common/Row'
import Column from '../Common/Column'

export default function RoomInfo2() {
    return (
        <div className="col-start-3 col-end-11 w-full h-1000 pt-16">
            <Column>
                <Row className="">Hotel DM</Row>
                <Row>2.5-stars</Row>
                <Row>jongno-gu, Seoul</Row>
                <Row>/100,000</Row>
                <Row>
                    <Row className="w-full">
                        4,5 35 riviews/
                        <Row className="w-1/4">
                            <Row>찜기능</Row>
                            <Row>공유기능</Row>
                            <Row>select a room</Row>
                        </Row>
                    </Row>
                </Row>
                <Row className="h-80 bg-red-400"></Row>
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
