import { useRef, useEffect } from 'react';
import styled from "@emotion/styled";
import { Divider,Box } from '@chakra-ui/react';
import  Instgram  from '@/assets/Instagram.svg?react';
import  Git  from '@/assets/Github.svg?react';
import { Link } from 'react-router-dom';
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
font-size: 60px;
font-weight: bold;
cursor: pointer;
&:hover {
  color: #CA92FF;
  }
  `;
  
const LoginButton = styled(StyledButton)`
  position: absolute;
  bottom: 20px; /* 하단에서 20px 위에 고정 */
  left: 50%;
  transform: translateX(-50%);
`;
  
  
  function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {  
    const outside = useRef<any>();   
    useEffect(() => {    
      document.addEventListener('mousedown', handlerOutsie);    
      return () => {      
        document.removeEventListener('mousedown', handlerOutsie);    
      }; 
    });   
    const handlerOutsie = (e: any) => {
      if (!outside.current.contains(e.target)) {
        toggleSide();    }  
              };   
              const toggleSide = () => {
                setIsOpen(false);  
              };   
              return (
      <>
        <SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
        <Box display="flex" justifyContent="flex-end" alignItems="center" height="50px" mb="10px">
          <Instgram style={{ marginRight: '10px' }} />
          <Git style={{ marginRight: '70px' }}/>
        </Box> 

        <Box display="flex" justifyContent="center">
           <Divider orientation="horizontal" borderColor="gray.800" width="80%" />
        </Box>

          <StyledButton>Feed</StyledButton><br/>
          <StyledButton>Challenge</StyledButton><br/>
          <StyledButton>Diary</StyledButton><br/>
          <StyledButton>MyPage</StyledButton><br/>

        <Box display="flex" justifyContent="center" marginTop="auto">
          <Link to="/login">
            <LoginButton>login</LoginButton>
          </Link>
        </Box>
        </SideBarWrap>  
      </>    
);} 

export default Sidebar;