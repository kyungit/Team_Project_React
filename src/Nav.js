import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="fixed w-full h-20 bg-lime-100 p-4">
            <div className="flex w-auto h-full flex-row justify-between items-center p-6">
                <Link to="/">칼퇴시켜줄래</Link>
                <div className=" w-1/4 flex justify-between">
                    <Link to="/login">로그인</Link>
                    <Link>로그아웃</Link>
                    <Link>회원가입</Link>
                </div>
            </div>
        </div>
    )
}
