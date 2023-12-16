import React, { useState } from 'react'
import HomeProvider from '../../provider/Home_Provider'
import Home1 from '../../components/Home/Home1'
import Home2 from '../../components/Home/Home2'
import Home3 from '../../components/Home/Home3'
import Home4 from '../../components/Home/Home4'
import Search from '../../components/Search/Search'
import axios from 'axios'

export default function Home() {
    console.log('렌더링')
    const [data, setData] = useState({
        id: '장진웅',
        password: '칼퇴짱123',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('data :  ', data) // 객체
        console.log('JSON.stringify(data) : ', JSON.stringify(data)) // 문자열로
        axios.post('http://localhost:8080/', data).then((res) => {
            // axios.post('http://localhost:8080/api/login', JSON.stringify(data)).then((res) => {
            console.log('res : ', res)
            console.log('res.data : ', res.data)

            // 로그인 성공여부 체크
            window.sessionStorage.setItem('loginId', res.data.id)
            window.sessionStorage.setItem('loginPassword', res.data.password)
            setData({ ...data }) // => 렌더링이 다시 진행 되어짐.
        })
    }

    return (
        <>
            <HomeProvider onSubmit={onSubmit}>
                <Search />
                <Home1 />
                <Home2 />
                <Home3 />
                <Home4 />
            </HomeProvider>
        </>
    )
}
