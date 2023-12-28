import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ReserveCheck() {
    const [payments, setPayments] = useState([]);
    let ReserveCheck

    useEffect(() => {
        // 서버에서 결제 정보를 가져옵니다.
        const fetchPayments = async () => {
            try {
                const response = await axios.get('/api/payment');
                setPayments(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPayments();
    }, []);

    const handleConfirm = async (paymentId) => {
        // 결제를 확정합니다.
        try {
            await axios.post('/api/payment/${paymentId}/confirm');
            alert('결제가 확정되었습니다.');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {payments.map(payment => (
                <div key={payment.id}>
                    <h2>{payment.name}</h2>
                    <p>{payment.amount}</p>
                    <button onClick={() => handleConfirm(payment.id)}>확정</button>
                </div>
            ))}
        </div>
    );
}
