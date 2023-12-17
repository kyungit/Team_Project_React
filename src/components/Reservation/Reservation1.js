import React from 'react'
import Column from '../Common/Column'
import Row from '../Common/Row'

export default function Reservation1() {
    return (
        <Column className="col-start-3 col-end-8 h-auto">
            <Row className="text-3xl font-semibold">예약 확인 및 결제</Row>
            <Row className="mt-8 text-2xl">파라스파라 서울</Row>
            <Row className="mt-4 text-lg">투윈룸</Row>

            <Row className="mt-16 text-2xl">예약자 정보</Row>
            <hr className='mt-4 w-11/12' />
            <Row className="mt-8 text-lg">예약자 이름</Row>
            <input className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base" />
            <Row className="text-lg">휴대폰 번호</Row>
            <input className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base" />
            <Row className="text-lg">이메일</Row>
            <input className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base" />

            <Row className="mt-16 text-2xl">투숙객 정보</Row>
            <hr className='mt-4 w-11/12' />
            <Row className="mt-8 text-lg">투숙객 이름</Row>
            <input className="border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-1/2 bg-white text-gray-900 font-normal text-base" />

        </Column>
    )
}
