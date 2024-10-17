import { forwardRef, useState } from 'react';
import { Box, Image, Text, Button } from "@chakra-ui/react";
import styled from '@emotion/styled';

type BookProps = {
  image: string;
  title: string;
  author: string;
  date: string;
};

const BookCard = forwardRef<HTMLDivElement, BookProps>(({ image, title, author, date },ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper 
      ref={ref}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledImage src={image} alt={title} />
      <TextContainer>
        <Text fontSize="lg" fontWeight="bold" color="gray.800" noOfLines={1} textAlign="center">
          {title}
        </Text>
        <Text color="gray.500" my="2" fontSize="sm" noOfLines={1} textAlign="center">
          {author}
        </Text>
        <Text fontSize="xs" color="gray.400" textAlign="center">
          {date}
        </Text>
      </TextContainer>
      {isHovered && (
        <ButtonContainer>
          <Button size="sm">책 선택하기</Button>
        </ButtonContainer>
      )}
    </Wrapper>
  );
});

export default BookCard;

const Wrapper = styled(Box)` 
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 18vw;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1.2;
  
  &:hover {
    filter: brightness(0.6);
    transition: 0.5s ease-in-out;
  }
`;

const TextContainer = styled(Box)`
  padding: 10px 0;
`;

const ButtonContainer = styled(Box)`
  position: absolute;
  bottom: 30vh;
  left: 50%;
  transform: translateX(-50%);
`;
