import styled from "@emotion/styled";

const ChalleneIntro = () => {
    return(
        <Wrapper>
            <Left>
            </Left>
            <Right>
                챌린지가 필요하신가요?
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
`
const Right = styled.div`
    width: 50vw;
    background-color: #282828;
    color: white;
`
export default ChalleneIntro;
