import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '@/assets/Rebit.svg';
//import axios from 'axios';
import LoginButton from '@/components/feature/login/LoginButton';

const LoginPage = () => {
  const location = useLocation();

  useEffect(() => {
    /*
    const code = new URLSearchParams(location.search).get('code'); // URL에서 인증 코드 추출
    if (code) {
      // 인증 코드를 백엔드로 전송하여 액세스 토큰 요청
      axios.post('https://your-backend.com/api/kakao/login', { code })
        .then(response => {
          // 서버에서 받은 JWT 또는 액세스 토큰을 저장
          localStorage.setItem('jwt_token', response.data.token);
          // 로그인 성공 후 홈 페이지로 리디렉트
          window.location.href = '/home';
        })
        .catch(error => {
          console.error('로그인 실패:', error);
        });
    }*/
  }, [location]);

  return (
    <div className="login-container">
      <Logo/>
      <h1 className="title">Rebit</h1>
      <p className="description">당신의 독서 습관 플랫폼 Rebit</p>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
