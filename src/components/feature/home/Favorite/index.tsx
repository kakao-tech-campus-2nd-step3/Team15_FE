import styled from "@emotion/styled"

const FavoriteIntro = () => {
    return(
        <Wrapper>
            <Left>
                장원영이 읽고 감명 받은 인생 책..
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
    background-color: #89FF56;
    color: white;
`

export default FavoriteIntro;