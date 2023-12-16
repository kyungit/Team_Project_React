import SocialKakao from '../../api/Login/KakaoLogin'
import SocialKakao2 from '../../api/Login/KakaoLogin2'

import React from 'react'
import NaverLogin from '../../api/Login/NaverLogin'
import NaverLogin2 from '../../api/Login/NaverLogin2'

export default function Login() {
    return (
        <div className="pt-40">
            <SocialKakao />
            <SocialKakao2 />
            <NaverLogin />
            <NaverLogin2 />
        </div>
    )
}
