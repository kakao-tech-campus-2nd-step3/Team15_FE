import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { RouterPath } from '@/routes/path';

const MainHeader = () => {
  const handleClick = () => {
    alert('사이드바 열기');
  };
  return (
  <Wrapper>
    <Left>
        <Link to={RouterPath.home}>
          {/* 아직 홈페이지 없는 상태라 작동X. 빌드도 오류 날 것임. */}
          Rebit {/* 레빗로고 이미지 따서 올려야함 */}
        </Link>
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
  height: 30px;
  display: flex;
  background-color: black;
`;

const Left = styled.div`
  justify-content: flex-start;
`;

const Right = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
export default MainHeader;
