import styled from '@emotion/styled';

type Props = {
  imageUrl: string;
  title: string;
};

const FeedCard = ({ imageUrl, title }: Props) => {

  return (
    <Wrapper>
      <ImageContainer>
        <PostImage src={imageUrl} />
        <div className="summary">
          <Title>{title}</Title>
        </div>
      </ImageContainer>
    </Wrapper>
  );
};
export default FeedCard;

const Wrapper = styled.div`
    border-radius: 10px;
`;

const ImageContainer = styled.div`
  border-radius: 10%;
    position: relative;
    
    .summary{
        position: absolute;
        top: 50%;
        left: 35%;
        z-index: 1;
        color: white;
        opacity: 0;
        display: flex;
        flex-direction: column;
    }



    &:hover .summary {
        transition: 1s ease 0.3s;
        opacity: 1;
    }
`;

const Title = styled.text`
    font-size: 1.5rem;
`

const PostImage = styled.img`
    width: 100%;
    border-radius: 10%;
    aspect-ratio: 1/1.2;
    object-fit: fill;
    &:hover{
        filter: brightness(0.5);
        transition: 0.5s ease-in-out;
    }
`;
