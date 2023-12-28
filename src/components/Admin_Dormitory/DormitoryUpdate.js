import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DormitoryUpdate() {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [amenity, setAmenity] = useState('');
    // 필요한 만큼의 상태를 추가합니다.

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 서버로 수정할 정보를 보냅니다.
        try {
            const response = await axios.put(`/api/dormitory/${code}`, {
                name,
                location,
                amenity,

                // 필요한 만큼의 정보를 추가합니다.
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                코드:
                <input type="text" value={code} onChange={e => setCode(e.target.value)} />
            </label>
            <label>
                이름:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                위치:
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
            <label>
                시설물:
                <input type="text" value={amenity} onChange={e => setAmenity(e.target.value)} />
            </label>
            <input type="submit" value="수정" />
        </form>
    );
}
