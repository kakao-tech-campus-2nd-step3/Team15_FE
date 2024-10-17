import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Sidebar from "@/components/common/Sidebar";
import OverlayWrapper from '@/components/common/overlay';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () =>{
    setIsOpen(true);
  };

  return (
  <Wrapper>
      <Left>
      </Left>
      <Right>
        <GiHamburgerMenu size={'3vw'} color={'white'} onClick={toggleSide}/>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <OverlayWrapper isOpen={isOpen}/>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 4vw;
  display: flex;
  background-color: black;
`;

const Left = styled.div`
  justify-content: flex-start;
`;

const Right = styled.div`
  padding: 10px;
  margin-left: auto;
  cursor: pointer;
`;
export default MainHeader;
