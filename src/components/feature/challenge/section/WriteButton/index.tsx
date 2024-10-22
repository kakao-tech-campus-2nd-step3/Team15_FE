import { Flex } from "@chakra-ui/react";
import styled from '@emotion/styled';


const WriteButton = () => { 
  const handleClick =() => {
    alert("챌린지 생성")
  };

  return (
    <Flex position="fixed" bottom="30px" right="3vw">
      <Button onClick={handleClick}>
        + 챌린지 생성
      </Button>
    </Flex>
  );

}

export default WriteButton;

const Button = styled.button`
  background-color: #474747;
  color: white;
  border-radius: 20px;
  padding: 10px 15px 10px 10px;
  font-weight: bold;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  `