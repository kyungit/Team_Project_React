import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import MenuContext from '../context/Admin_Web_Context'

const AdminWebProvider = ({ children }) => {
    const [users, setUsers] = useState([]) // 회원 정보를 담을 상태 변수
    const [selectedUser, setSelectedUser] = useState(null) // 선택된 회원 정보를 담을 상태 변수
    const [reviews, setReviews] = useState([]) // 리뷰 정보를 담을 상태 변수

    // 회원 정보 가져오기
    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users') // 회원 정보를 가져오는 API 엔드포인트
            setUsers(response.data) // 가져온 회원 정보를 상태 변수에 저장
        } catch (error) {
            console.error(error)
        }
    }

    // 선택된 회원 정보 설정
    const selectUser = (user) => {
        setSelectedUser(user)
    }

    // 별점과 리뷰 가져오기
    const getReviews = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}/reviews`) // 선택된 회원의 리뷰 정보를 가져오는 API 엔드포인트
            setReviews(response.data) // 가져온 리뷰 정보를 상태 변수에 저장
        } catch (error) {
            console.error(error)
        }
    }

    // 회원 강제 탈퇴
    const forceWithdraw = async (userId) => {
        try {
            await axios.delete(`http://localhost:3000/users/${userId}`) // 선택된 회원을 강제 탈퇴시키는 API 엔드포인트
            // 회원 강제 탈퇴 후 필요한 작업 수행
            // 예시: 회원 목록 다시 불러오기
            getUsers()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        // 컴포넌트가 마운트될 때 회원 정보 가져오기
        getUsers()
    }, [])

    const value = useMemo(
        () => ({
            users,
            selectedUser,
            reviews,
            selectUser,
            getReviews,
            forceWithdraw,
        }),
        [users, selectedUser, reviews]
    )

    return (
        <MenuContext.Provider value={value}>
            <div>{children}</div>
        </MenuContext.Provider>
    )
}

export default AdminWebProvider
