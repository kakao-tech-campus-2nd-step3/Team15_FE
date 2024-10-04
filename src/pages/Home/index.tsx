import styled from '@emotion/styled';
import Welcome from '@/components/feature/home/Welcome';
import ChalleneIntro from '@/components/feature/home/Challege';
import FavoriteIntro from '@/components/feature/home/Favorite';
import StoryIntro from '@/components/feature/home/Story';
import Footer from '@/components/feature/home/Footer';

const Homepage = () => {
  return (
    <Wrapper>
      <Welcome />
      <StoryIntro />
      <ChalleneIntro />
      <FavoriteIntro />
      <Footer />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;
