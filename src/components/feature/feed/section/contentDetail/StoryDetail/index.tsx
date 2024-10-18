import styled from '@emotion/styled';

type Props = {
  content:string;
}
const StoryContentDetail = ({content}: Props) => {
  return (
    <>
      <ContentWrapper>
        {content}
      </ContentWrapper>
    </>
  )
}

const ContentWrapper = styled.div`
  width: 100%;
    height: 40vh;
    overflow-y: scroll;
    text-align: left;
    padding: 1rem;
`
export default StoryContentDetail;