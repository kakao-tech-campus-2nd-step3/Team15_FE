import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';


const MainHeader = () => {
  const handleClick = () => {
    alert('사이드바 열기');
  };
  return (
  <Wrapper>
      <Left>
      </Left>
      <Right>
        <GiHamburgerMenu size={30} color={'white'} onClick={handleClick} />
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
