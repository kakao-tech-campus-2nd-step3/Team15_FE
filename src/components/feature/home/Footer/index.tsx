import FooterImage from "@/assets/Main/Footer.svg?react";
import About from "@/assets/Main/AboutUs.svg?react";

import { FiGithub } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import styled from "@emotion/styled";
import CommonContainer from "../../../common/layouts/Container";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Wrapper>
            <Container>
            <About />
                <TextContainer>
                    <Text>카카오테크 캠퍼스 2기 15조</Text>
                    <CommonContainer
                        flexDirection="row"
                    >
                        <FiGithub color="white" size="2rem" />
                        <StyledLink to="https://github.com/kakao-tech-campus-2nd-step3/Team15_FE">https://github.com/kakao-tech-campus-2nd-step3/Team15_FE</StyledLink>
                    </CommonContainer>           
                    <CommonContainer
                        flexDirection="row"
                    >
                        <SiNotion color="white" size="2rem" />
                        <StyledLink to="https://www.notion.so/c81e1a6e0847453296648a72419cd817?pvs=4">https://www.notion.so/c81e1a6e0847453296648a72419cd817?pvs=4</StyledLink>
                    </CommonContainer>        
                </TextContainer>
            </Container>
            <CommonContainer
            maxWidth={"100vw"}
            justifyContent={"center"}
            alignItems={"center"}
            >
                <FooterImage />
            </CommonContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    background-color: black;
`

const Container = styled.div`
    margin-top: 50px;
    height: 20vw;
    margin-left: 5vw;
`

const Text = styled.p`
    font-family: 'DungGeunMo';
    font-weight: bold;
    font-size: 30px;
    color: white;
`

const TextContainer = styled.div`
    margin-left: 8rem;
`
const StyledLink = styled(Link)`
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: thin;
    color: white;
    margin-left: 1rem;
    font-size: 20px;
`

export default Footer;