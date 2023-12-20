import SocialKakao from '../../api/Login/KakaoLogin'
import SocialKakao2 from '../../api/Login/KakaoLogin2'

import React from 'react'
import GoogleLogin from '../../api/Login/GoogleLogin'

import NaverLogin from '../../api/Login/NaverLogin'
import NaverLogin2 from '../../api/Login/NaverLogin2'

export default function Login() {
    return (
        <div className="pt-40" style={{testAlign:'center'}}>
            <GoogleLogin /><br />
            <SocialKakao /><br />
            <SocialKakao2 /><br />
            <NaverLogin /><br />
            <NaverLogin2 />
        </div>
    )
}
