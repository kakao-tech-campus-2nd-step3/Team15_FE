import CommonGrid from '@/components/common/Grid';
import CommonModal from '@/components/common/Modal';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import FeedCard from '@/components/feature/feed/post/Card';
import { Spinner } from '@/components/common/Spinner';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// type Props = {
//   id: number;
//   imageUrl: string;
//   title: string;
//   type: string;
// }

const FeedItemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFeedData() {
      try {
        const res = await axios.get(`${BASE_URL}/api/feeds`);
        const result = await res.data.content;
        setData(result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        alert('Error: 데이터를 불러올 수 없습니다.');
      }
    }
    getFeedData();
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
              <FeedCard imageUrl={data.imageUrl} title={data.content} />
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
