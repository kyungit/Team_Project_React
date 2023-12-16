import React from 'react'
import NaverLogin from 'react-naver-login'

const NaverLogin2 = () => {
    const Naver_CLIENT_ID = process.env.NAVER_CLIENT_ID // 발급받은 클라이언트 아이디
    return (
        <NaverLogin
            clientId={Naver_CLIENT_ID}
            callbackUrl="http://127.0.0.1:3000/auth"
            render={(props) => <div onClick={props.onClick}>Naver Login</div>}
            onSuccess={(result) => console.log(result)}
            onFailure={(result) => console.error(result)}
        ></NaverLogin>
    )
}

export default NaverLogin2
