import styled from '@emotion/styled';

import Favorite from '@/assets/Main/Favorite.svg?react';
import LandingItems from '../Section/Landing-items';

const FavoriteIntro = () => {
  return (
    <Wrapper>
      <Left>
        <Favorite />
      </Left>
      <Right>
        <LandingItems />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
`;
const Left = styled.div`
  width: 50vw;
`;
const Right = styled.div`
  width: 50vw;
  background-color: #89ff56;
  display: flex;
`;

export default FavoriteIntro;
