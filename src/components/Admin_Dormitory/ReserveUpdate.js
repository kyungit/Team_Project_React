import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ReserveUpdate() {
    const [payment, setPayment] = useState([]); // 결제 정보를 상태로 관리합니다.

    // 컴포넌트가 마운트될 때 결제 정보를 가져옵니다.
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get('/api/payment');
                setPayment(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPayment();
    }, []);

    const handleUpdate = async (paymentId, updatedInfo) => {
        // 결제 정보를 수정합니다.
        try {
            await axios.put(`/api/payment/${paymentId}`, updatedInfo);
            alert('결제 정보가 수정되었습니다.');
            // 수정 후 결제 정보를 다시 가져옵니다.
            const response = await axios.get('/api/payment');
            setPayment(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleConfirm = async (id) => {
        // 결제를 확정합니다.
        try {
            await axios.post(`/api/payment/${id}/confirm`);
            alert('결제가 확정되었습니다.');
            // 확정 후 결제 정보를 다시 가져옵니다.
            const response = await axios.get('/api/payment');
            setPayment(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = async (id) => {
        // 결제를 취소합니다.
        try {
            await axios.post(`/api/payment/${id}/cancel`);
            alert('결제가 취소되었습니다.');
            // 취소 후 결제 정보를 다시 가져옵니다.
            const response = await axios.get('/api/payment');
            setPayment(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {payment.map(payment => (
                <div key={payment.id}>
                    <h2>{payment.name}</h2>
                    <p>{payment.amount}</p>
                    <button onClick={() => handleConfirm(payment.id)}>확정</button>
                    <button onClick={() => handleCancel(payment.id)}>취소 확정</button>
                    <button onClick={() => handleUpdate(payment.id, { name: '새로운 이름', amount: '새로운 금액' })}>수정</button>
                </div>
            ))}
        </div>
    );
}

