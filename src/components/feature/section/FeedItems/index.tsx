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
// }

const FeedItemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    async function getFeedData() {
      try {
        const res = await axios.get(`${BASE_URL}/api/feeds`);
        // const res = await axios.get('/src/data/data.json');    // 아직 데이터가 없어서 에러가 뜹니다. mock 데이터 만들어서 테스트용입니다. POST 구현 후에는 삭제할 예정입니다.
        const result = await res.data;
        setData(result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        alert("Error: 데이터를 불러올 수 없습니다.");
      }
  }
  getFeedData();
}, []);

  console.log(data)

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!data) return <></>;
  if (isLoading) return <><Spinner /></>;

  return (
    <Wrapper>
      <CommonGrid columns={4} gap={50}>
        {data.map((data) =>
            <ItemWrapper key={data.id} onClick={() => setIsModalOpen(true)}>
              <FeedCard
                imageUrl={data.imageUrl}
                title={data.title}
              />
            </ItemWrapper>
        )}
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
