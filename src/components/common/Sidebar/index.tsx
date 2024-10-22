import { useRef, useEffect } from 'react';
import styled from "@emotion/styled";
import { Divider,Box } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { useAuth } from '@/provider/Auth';
  
function Sidebar({ isOpen, setIsOpen}: { isOpen: boolean; setIsOpen: any}) {  
  const { isLogin, setLogin } = useAuth();
  const navigate = useNavigate();
  const outside = useRef<any>();   

  useEffect(() => {    
    document.addEventListener('mousedown', handlerOutside);    
    return () => {      
      document.removeEventListener('mousedown', handlerOutside);    
    }; 
  });   
  
  const handlerOutside = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();    }  
    };   
    
  const handleLogout = () => {
    localStorage.removeItem('jwt_token'); 
    setLogin(false);
    navigate('/'); 
  }
   
  const toggleSide = () => {
    setIsOpen(false);  
  };
  
    return (
      <>
        <SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
        <Box display="flex" justifyContent="flex-end" alignItems="center" height="50px" mb="10px" marginRight={"5vw"}>
          <Link to="https://www.instagram.com/katarinabluu/">
                <FiInstagram color="black" size="3rem" />
          </Link>
          <Box margin={"10px"}/>
          <Link to="https://github.com/kakao-tech-campus-2nd-step3/Team15_FE">
            <FiGithub color="black" size="3rem" />
          </Link>
        </Box> 

        <Box display="flex" justifyContent="center">
          <Divider orientation="horizontal" borderColor="gray.800" width="80%" />
        </Box>

          <StyledButton>
            <Link to="/feed">Feed</Link>
          </StyledButton><br/>    
          <StyledButton>
            <Link to="/challenge">Challenge</Link>
            </StyledButton><br/>
          <StyledButton>Diary</StyledButton><br/>
          <StyledButton>MyPage</StyledButton><br/>

        <Box display="flex" justifyContent="center" marginTop="auto">
        <LoginButton onClick={isLogin ? handleLogout : () => navigate('/login')}>
            {isLogin ? '로그아웃' : '로그인'}
          </LoginButton>
        </Box>
        </SideBarWrap>  
      </>    
    )
;} 

export default Sidebar;

const SideBarWrap = styled.div`  
z-index: 10;  
padding: 12px;  
background-color: white;   
height: 100%;  
width: 50%;  
right: -50%;  
top: 0;  
position: fixed;  
transition: 0.5s ease;  
&.open {    right: 0;    transition: 0.4s ease;  }`; 


const StyledButton = styled.button`
background-color: none;
color: black;
border: none;
padding: 10px 20px;
font-size: 5vw;
font-weight: bold;
cursor: pointer;
&:hover {
  color: #CA92FF;
  }
  `;
  
const LoginButton = styled(StyledButton)`
  position: absolute;
  bottom: 20px; /* 하단에서 20px 위에 고정 */
  font-size: 3vw;
  left: 50%;
  transform: translateX(-50%);
`;