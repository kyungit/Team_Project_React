import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="fixed w-full h-16 bg-white p-4">
            <div className="flex w-auto flex-row justify-between">
                <div>칼퇴시켜줄래</div>
                <div className="w-1/6 flex justify-between">
                    <Link to="/login">로그인</Link>
                    <Link>asd</Link>
                    <Link>asd</Link>
                </div>
            </div>
        </div>
    )
}
