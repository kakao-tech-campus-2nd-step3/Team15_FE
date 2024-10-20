import Overlay from "@/components/common/overlay";
import styled from "@emotion/styled";
import { Button } from "@/components/common/Button";

type Props = {
    isModalOpen: boolean;
    handleModalClose: () => void;
    children: React.ReactNode;
}

const CommonModal = ({ children, isModalOpen, handleModalClose }: Props) => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return(
        <>
            <Overlay 
                isOpen={isModalOpen}
            />
            <ModalContainer>
                <ButtonContainer>
                    <Button 
                    onClick={handleModalClose}
                    theme='outline'
                    size='medium'
                    > X 
                    </Button>
                </ButtonContainer>
                <ContentSection>
                    {children}
                </ContentSection>

            </ModalContainer>
        </>
    )
}

export default CommonModal;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 999;
    background-color: white;
    width: 60vw;
    height: 60vh;
    position: fixed;
    top: 20%;
    right: 20%;
    border-radius: 10px;
    padding: 2rem;
`

const ButtonContainer = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: flex-end;
`

const ContentSection = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
`