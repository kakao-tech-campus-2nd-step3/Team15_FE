import CommonGrid from '@/components/common/Grid';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { Skeleton } from '@chakra-ui/react';
import StoryDetailModal from '@/components/feature/modals/stories/ContentDetail';
import FeedCard from '@/components/feature/feed/post/Card';
// import PostStoryModal from '@/components/modals/stories/PostStory';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const FeedItemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<'S' | 'FB' | 'M' | null>(null);

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

  const handleCardClick = (id: number, type: 'S' | 'FB' | 'M') => {
    setSelectedId(id);
    setIsModalOpen(true)
    setSelectedType(type)
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedId(null)
    setSelectedType(null)
  };

  // 모달 열려있을 때, 스크롤 금지, 닫았을 때 다시 스크롤
  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  
  if (!data) return <></>;

  return (
    <Wrapper>
      <Skeleton isLoaded={!isLoading}>
        <CommonGrid columns={4} gap={50}>
          {Array.isArray(data) &&
            data.map((data) => (
              <ItemWrapper key={data.id} onClick={() => handleCardClick(data.id, data.type)}>
                <FeedCard imageUrl={data.presignedUrl} title={data.content} />
              </ItemWrapper>
            ))}
        </CommonGrid>
        {isModalOpen && selectedId !== null &&  selectedType !== null && (
          <>
            {selectedType === 'S' && (
              <StoryDetailModal
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
                id={selectedId}
                type="S"
              />
            )}
            {/*{selectedType === 'FB' && (*/}
            {/*  <FavBookDetailModal*/}
            {/*    isModalOpen={isModalOpen}*/}
            {/*    handleModalClose={handleModalClose}*/}
            {/*    id={selectedId}*/}
            {/*    type="FB"*/}
            {/*  />*/}
            {/*)}*/}
            {/*{selectedType === 'M' && (*/}
            {/*  <MagazineDetailModal*/}
            {/*    isModalOpen={isModalOpen}*/}
            {/*    handleModalClose={handleModalClose}*/}
            {/*    id={selectedId}*/}
            {/*    type="M"*/}
            {/*  />*/}
            {/*)}*/}
          </>
        )}
      </Skeleton>
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
