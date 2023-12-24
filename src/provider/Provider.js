import React, { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const Provider = ({ children }) => {
    const [searchdata, setSearchdata] = useState({
        keyword: null,
        startDate: null,
        endDate: null,
        guest: null,
    })

    const navigate = useNavigate()

    useEffect(() => {
        console.log(searchdata.keyword, searchdata.startDate, searchdata.endDate, searchdata.guest)
    }, [searchdata])

    const onSubmitSearch = useCallback(() => {
        const SearchdataGet = async () => {
            await axios
                .get('http://localhost:8080/searchList/dormitory', { params: searchdata })
                .then((res) => {
                    console.log('success : ', res.status)
                    console.log('res : ', res)
                    console.log('res.data : ', res.data)

                    // 성공적으로 처리되었을 때 리디렉션
                    navigate('/searchList')
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error)
                    // 요청이 실패했을 때의 동작을 여기에 추가합니다.
                    // 예: setError('Error fetching data');
                })
        }

        SearchdataGet()
    }, [searchdata])

    const value = useMemo(
        () => ({ searchdata, setSearchdata, onSubmitSearch }),
        [searchdata, setSearchdata, onSubmitSearch],
    )

    return (
        <Context.Provider value={value}>
            <div>{children}</div>
        </Context.Provider>
    )
}

export default Provider
