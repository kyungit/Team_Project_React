import React from 'react'

const NaverLogin = () => {
    const Naver_CLIENT_ID = process.env.NAVER_CLIENT_ID // 발급받은 클라이언트 아이디
    const REDIRECT_URI = 'http://localhost:3000/oauth'
    const STATE = 'false'
    // const NAVER_AUTH_URL = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${Naver_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`
    const NAVER_AUTH_URL = 'http://localhost:8080/oauth2/authorization/naver'
    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL
    }

    return <button onClick={NaverLogin}>네이버 로그인</button>
}

export default NaverLogin
