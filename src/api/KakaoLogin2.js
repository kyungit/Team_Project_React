import axios from 'axios'
import KakaoLogin from 'react-kakao-login'

const SocialKakao = () => {
    const kakaoClientId = '804687699258cfabd49b5c6d2fc27dd3'
    const kakaoOnSuccess = async (data) => {
        console.log(data)
        const idToken = data.response.access_token // 엑세스 토큰 백엔드로 전달

        // https://kapi.kakao.com/v2/user/me 로 id_token을 헤더에 삽입하여 Post 요청해 데이터를 얻습니다.
        const kakaoResponse = await axios.post('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        idToken = kakaoResponse.data.id
    }
    const kakaoOnFailure = (error) => {
        console.log(error)
    }

    return (
        <>
            <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} />
        </>
    )
}

export default SocialKakao
