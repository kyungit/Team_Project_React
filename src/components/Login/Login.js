import SocialKakao from '../../api/KakaoLogin'
import SocialKakao2 from '../../api/KakaoLogin2'

import React from 'react'

export default function Login() {
    return (
        <div className="pt-40">
            <SocialKakao />
            <SocialKakao2 />
        </div>
    )
}
