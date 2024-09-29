import { Button } from '@chakra-ui/react';

const REST_API_KEY = import.meta.env.VITE_KAKAO_JS_KEY;
const REDIRECT_URI = 'http://localhost:3000/';  

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const kakaoButtonStyles = {
  backgroundColor: "#ffeb00",   
  color: "#000000",            
  _hover: { backgroundColor: "#e6d700" }, 
  borderRadius: "md",           
  padding: "8px 16px",          
  fontWeight: "bold",          
  fontSize: "16px",          
};

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Button onClick={handleLogin} {...kakaoButtonStyles}>
      카카오 로그인
    </Button>
  );
};

export default LoginButton;
