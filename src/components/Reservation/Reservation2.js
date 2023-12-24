import React, { useContext, useEffect, useState } from 'react'
import Column from '../Common/Column'
import Row from '../Common/Row'
import Box from '../Common/Box'
import ReservationProvider from '../../provider/Reservation_Provider'
import ReservationContext from '../../context/Reservation_Context'
import Provider from '../../provider/Provider'
import Context from '../../context/Context'
import ReservationModal from './ReservationModal'

export default function Reservation2() {
    const { reservations, setReservationdata, reservationdata } = useContext(ReservationContext)
    const { searchdata } = useContext(Context)
    const [reservation, setReservation] = useState(null)

    let paid = null
    useEffect(() => {
        if (reservations && reservations) {
            setReservation(reservations.reservations1)
        }
    }, [reservations])

    function getDayName(dateString) {
        const date = new Date(dateString)
        const dayNames = ['일', '월', '화', '수', '목', '금', '토']
        return dayNames[date.getDay()]
    }

    //모달 전용 함수
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = async () => {
        if (reservationdata.m_username == null) {
            alert('이름을 입력하세요')
            return false
        }
        if (reservationdata.m_telno == null) {
            alert('번호를 입력하세요')
            return false
        }
        if (reservationdata.m_userid == null) {
            alert('이메일을 입력하세요')
            return false
        } else {
            var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
            if (exptext.test(reservationdata.m_userid) == false) {
                //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
                alert('이메일형식이 올바르지 않습니다.')
                return false
            }
        }

        setReservationdata &&
            setReservationdata({
                ...reservationdata,
                d_code: reservation.d_code,
                r_code: reservation.r_code,
                d_name: reservation.d_name,
                d_type: reservation.d_type,
                r_img: reservation.r_img,
                r_name: reservation.r_name,

                reservation_checkin: searchdata.startDate,
                reservation_checkout: searchdata.endDate,
                reservation_guest: searchdata.guest,
                reservation_price: reservation.r_price,
                s_status: 3,
            })
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="col-start-8 col-end-11 h-auto pt-56">
            <Box>
                <Column className="text-gray-500">
                    <Row className="text-2xl m-0 text-black">예약 정보</Row>
                    {reservation && (
                        <div>
                            <Row splitEnabled={false}>
                                투숙일 : {searchdata.startDate}
                                <span className="font-medium">({getDayName(searchdata.startDate)}</span>) ~ {searchdata.endDate}
                                <span className="font-medium">({getDayName(searchdata.endDate)}</span>)
                            </Row>
                            <Row>객실 인원 : {searchdata.guest}명</Row>

                            <Row>예약 금액 {parseInt(reservation.r_price).toLocaleString()}원</Row>
                            <Row>할인 제공 :{reservation.d_discount}%</Row>
                            <Row>
                                결제 금액
                                {(reservation.r_price - (reservation.r_price * reservation.d_discount) / 100).toLocaleString()}원
                            </Row>

                            <button
                                className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                                style={{ backgroundColor: '#D9F99D' }}
                                onClick={openModal}
                            >
                                {(reservation.r_price - (reservation.r_price * reservation.d_discount) / 100).toLocaleString()}원 결제하기
                            </button>
                        </div>
                    )}
                </Column>
            </Box>

            {isModalOpen && <ReservationModal closeModal={closeModal}></ReservationModal>}
        </div>
    )
}
