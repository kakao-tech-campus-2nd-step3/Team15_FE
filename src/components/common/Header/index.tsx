import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Sidebar from "@/components/common/Sidebar";
import OverlayWrapper from '@/components/common/overlay';
import { Link } from 'react-router-dom';
import Homepage from '@/pages/Home';

const CommonHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSide = () =>{
        setIsOpen(true);
    };
    return (
        <Wrapper>
            <Left>
                <Link to="/">
                    <Text>
                        Rebit
                    </Text>
                </Link>
            </Left>
            <Right>
                <GiHamburgerMenu size={'2vw'} color={'black'} onClick={toggleSide}/>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <OverlayWrapper isOpen={isOpen}/>
            </Right>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
    max-width: 100vw;
    height: 2.5vh;
    display: flex;
`;

const Text = styled.text`
    font-size: 2vw;
    cursor: pointer;
    font-family: 'Pretendard-Regular';
    font-weight: 900;
`

const Left = styled.div`
    justify-content: flex-start;
    padding: 10px;
`;

const Right = styled.div`
    padding: 10px;
    margin-left: auto;
    cursor: pointer;
`;
export default CommonHeader;
