import { Image } from '@chakra-ui/react';
import kakao_login from '@/assets/kakao_login.png'
const REST_API_KEY = import.meta.env.VITE_KAKAO_JS_KEY;
const REDIRECT_URI = 'http://localhost:3000/';  

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <Image onClick={handleLogin} src={kakao_login} width="400px" margin="30px" cursor="pointer"/>
    </>
  );
};

export default LoginButton;
