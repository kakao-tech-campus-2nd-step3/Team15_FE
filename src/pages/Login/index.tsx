import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import  Logo  from '@/assets/Rebit.svg?react';
//import axios from 'axios';
import LoginButton from '@/components/feature/login/LoginButton';
import { Flex } from '@chakra-ui/react';

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
    <Flex
    height="100vh"          // 전체 창 높이를 차지
    justifyContent="center"  // 가로 중앙 정렬
    alignItems="center"      // 세로 중앙 정렬
    flexDirection="column"   // 자식 요소들을 세로로 정렬
    textAlign="center"
    >
      <Logo />
      <Content>
        당신의 독서 습관 플랫폼 Rebit
      </Content>
      <LoginButton />
    </Flex> 
  );
};

export default LoginPage;

const Content = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #000000;
  margin-top: 20px;
`