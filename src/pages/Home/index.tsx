import styled from "@emotion/styled";
import Welcome from "@/components/feature/home/Welcome";
import ChalleneIntro from "@/components/feature/home/Challege";
import FavoriteIntro from "@/components/feature/home/Favorite";
import StoryIntro from "@/components/feature/home/Story";

const Homepage = () => {
    return (
        <Wrapper>
            <Welcome />
            <StoryIntro />
            <ChalleneIntro />
            <FavoriteIntro />
        </Wrapper>
    )
}

export default Homepage;

const Wrapper= styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
`