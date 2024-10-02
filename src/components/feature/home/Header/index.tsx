import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';


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
        <GiHamburgerMenu size={30} color={'white'} onClick={toggleSide}/>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 50px;
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
