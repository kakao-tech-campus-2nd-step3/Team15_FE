import styled from "@emotion/styled";
import MainHeader from "../Header";

const Welcome = () => {
    return (
        <Wrapper>
            <MainHeader />
            <Text>
                Rebit
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    scroll-snap-align: end;
    background-color: black
`
const Text = styled.div`
    font-family: 'Pretendard-Regular';
    width: 100%;
    text-align: center;
    color: white;
    font-size: 45vw;
    margin-top: 10%;
`

export default Welcome;