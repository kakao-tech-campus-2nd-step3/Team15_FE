import styled from "@emotion/styled"

const StoryIntro = () => {
    return(
        <Wrapper>
            <Left>
                루쉰이 희망에 대해 말하다.
            </Left>
            <Right>
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
    background-color: #282828;
    color: white;
`
const Right = styled.div`
    width: 50vw;
    background-color: #FF72C0;
    color: white;
`

export default StoryIntro;