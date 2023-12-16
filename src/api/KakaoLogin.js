const SocialKakao = () => {
    const Rest_api_key = 'REST API KEY' //REST API KEY
    const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
    const code = new URL(window.location.href).searchParams.get('code')
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=804687699258cfabd49b5c6d2fc27dd3&redirect_uri=http://localhost:3000/auth&response_type=code`
    const handleLogin = () => {
        window.location.href = kakaoURL
    }
    return (
        <>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>
    )
}
export default SocialKakao
