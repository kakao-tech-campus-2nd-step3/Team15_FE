import styled from '@emotion/styled';

import StorySample from '@/assets/Main/Story.svg?react';
import LandingItems from '../Section/Landing-items';

const StoryIntro = () => {
  return (
    <Wrapper>
      <Left>
        <StorySample />
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
  display: flex;
`;

export default StoryIntro;
