import styled from '@emotion/styled';
import  Logo  from '@/assets/Rebit.svg?react';
import LoginButton from '@/components/feature/login/LoginButton';
import { Flex } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <Flex
    height="100vh"          
    justifyContent="center"  
    alignItems="center"      
    flexDirection="column"   
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