import React, { useState } from 'react'
import axios from 'axios'

const Payment = () => {
    const [IMP, setIMP] = useState('imp30387750')

    const onClickRequestPay = () => {
        const { IMP } = window
        IMP.init('imp30387750')

        const today = new Date()
        const hours = today.getHours() // 시
        const minutes = today.getMinutes() // 분
        const seconds = today.getSeconds() // 초
        const milliseconds = today.getMilliseconds()
        const makeMerchantUid = hours + minutes + seconds + milliseconds
        IMP.request_pay(
            {
                pg: 'kakaopay',
                pay_method: 'kakaopay',
                merchant_uid: 'IMP' + makeMerchantUid,
                name: '숙소예약Test', //입력란 만들기
                amount: 20000, //나중에 숙소 가격 DB에서 가져오기
                buyer_name: '이도경', //입력란 만들기
                buyer_tel: '01012345678', //입력란 만들기
            },
            (rsp) => {
                if (rsp.success) {
                    console.log('가격' + rsp.paid_amount)
                    axios({
                        url: 'http://localhost:8080/reservation/payment',
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        data: {
                            imp_uid: rsp.imp_uid,
                            merchant_uid: rsp.merchant_uid,
                            paid_amount: rsp.paid_amount,
                            buyer_name: rsp.buyer_name,
                            buyer_tel: rsp.buyer_tel,
                            paid_status: rsp.status,
                            success: rsp.success,
                            reservation_code: 3,
                        },
                    }).then((data) => {
                        console.log(data)
                    })
                } else {
                    alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`)
                }
            },
        )
    }

    return (
        <button className="mt-40" onClick={onClickRequestPay}>
            결제하기
        </button>
    )
}

export default Payment
