import SocialKakao from '../../api/KakaoLogin'
import SocialKakao2 from '../../api/KakaoLogin2'

import React from 'react'
import NaverLogin from '../../api/NaverLogin'
import NaverLogin2 from '../../api/NaverLogin2'

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
