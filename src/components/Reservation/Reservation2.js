import React from 'react'
import Column from '../Common/Column'
import Row from '../Common/Row'
import Box from '../Common/Box'

export default function Reservation2() {
    return (
        <div className="col-start-8 col-end-11 h-auto pt-56">
            <Box>
                <Column className="text-gray-500">
                    <Row className="text-2xl m-0 text-black">예약 정보</Row>
                    <Row>투숙일 / 2024. 1. 9(화) - 2024. 1. 10 (수), 1박</Row>
                    <Row>객실 인원 / 2인 (성인 2, 아동 0)</Row>

                    <Row>예약 금액 / 330,000원</Row>
                    <Row>할인 제공 / 15 %</Row>
                    <Row>결제 금액 / 280,500</Row>
                </Column>
            </Box>

            <Box className="mt-8">
                <button
                    className="tab-size-4 user-select-text box-border flex items-center justify-center 
                    h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                    style={{ backgroundColor: '#D9F99D' }}
                >
                    330,000원 결제하기
                </button>
            </Box>
        </div>
    )
}
