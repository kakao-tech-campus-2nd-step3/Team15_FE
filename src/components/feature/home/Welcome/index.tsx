import styled from '@emotion/styled';
import MainHeader from '@/components/feature/home/Header';
import Mainlogo from './logo';

const Welcome = () => {
  return (
    <Wrapper>
      <MainHeader />
      <Box>
        <Mainlogo />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: end;
  background-color: black;
`;

const Box = styled.div`
  margin-top: 10%;
`;

export default Welcome;
