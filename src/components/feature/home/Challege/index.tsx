import styled from "@emotion/styled";
import ChallengeSample from "@/assets/Main/Challenge.svg?react";
import LandingItems from "../Section/Landing-items";


const ChalleneIntro = () => {
    return(
        <Wrapper>
            <Left>
                <LandingItems />
            </Left>
            <Right>
                <ChallengeSample /> 
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    scroll-snap-align: start;    
`
const Left = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-contents: center;
    padding: 50px;
`
const Right = styled.div`
    width: 50vw;
    height: 100vh;
`
export default ChalleneIntro;
