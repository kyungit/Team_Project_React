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
                <Row className="w-1/2 h-96 bg-red-400"></Row>
            </Column>
        </div>
    )
}
