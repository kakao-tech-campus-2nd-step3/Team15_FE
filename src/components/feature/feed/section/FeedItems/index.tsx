import CommonGrid from '@/components/common/Grid';
import CommonModal from '@/components/common/Modal';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FeedCard from '@/components/feature/feed/post/Card';
import { Spinner } from '@/components/common/Spinner';
import axios from 'axios';
// import PostStoryModal from '@/components/feature/modals/stories/PostStory';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const FeedItemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFeedData() {
      try {
        const res = await axios.get(`${BASE_URL}/api/feeds`);
        console.log(res);
        const result = await res.data;
        setData(result.content);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        alert('Error: 데이터를 불러올 수 없습니다.');
      }
    }
    getFeedData();
  }, [setData]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // 모달 열려있을 때, 스크롤 금지, 닫았을 때 다시 스크롤
  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  if (!data) return <></>;
  if (isLoading)
    return (
      <>
        <Spinner />
      </>
    );

  return (
    <Wrapper>
      <CommonGrid columns={4} gap={50}>
        {Array.isArray(data) &&
          data.map((data) => (
            <ItemWrapper key={data.id} onClick={() => setIsModalOpen(true)}>
              <FeedCard imageUrl={data.presignedUrl} title={data.content} />
            </ItemWrapper>
          ))}
      </CommonGrid>
      {isModalOpen && (
        <CommonModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </Wrapper>
  );
};

export default FeedItemSection;

const Wrapper = styled.section`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.button`
  width: 18vw;
  min-width: 10vw;
`;
