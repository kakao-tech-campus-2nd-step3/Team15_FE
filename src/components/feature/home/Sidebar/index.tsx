import { useRef, useEffect } from 'react';
import styled from "@emotion/styled";
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

const Menu = styled.li`  
margin: 30px 8px;`; 


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
        <ul>        
          <Menu>메뉴1</Menu>
          <Menu>메뉴2</Menu>
          <Menu>메뉴3</Menu>
        </ul>    
        </SideBarWrap>  
        {/* <OverlayWrapper isOpen={isOpen}/> */}
      </>    
);} 

export default Sidebar;