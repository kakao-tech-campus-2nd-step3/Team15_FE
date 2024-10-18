import styled from '@emotion/styled';
import CommonModal from '@/components/common/Modal';
import CommonContainer from '@/components/common/layouts/Container';
import { Divider } from '@chakra-ui/react';
import CommonAvatar from '@/components/common/Avatar';
import StoryContentDetail from '@/components/feature/feed/section/contentDetail/StoryDetail';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@/components/common/Spinner';

const BASE_URL = import.meta.env.VITE_BASE_URL;

type Props = {
  isModalOpen: boolean;
  handleModalClose: () => void;
  id: number;
  isLogin: boolean;
};

type Author = {
  nickname: string;
  imageUrl?: string;
};

type FeedData = {
  presignedUrl: string;
  author: Author;
  content: string;
  likes: number;
};


const StoryDetailModal = ({ isModalOpen, handleModalClose, id }: Props) => {
  const [data, setData] = useState<FeedData | null>(null);
  const jwtToken = localStorage.getItem('jwt_token');
  const parsedToken = jwtToken ? JSON.parse(jwtToken) : null;
  const accessToken = parsedToken?.accessToken;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getContentDetails() {
      if(!id || !accessToken) return;

      try {
        const res = await axios.get(`${BASE_URL}/api/feeds/${id}`,
          { headers: { Authorization: `Bearer ${accessToken}` }, }
        );
        console.log(res);
        const result = await res;
        setData(result.data);
        console.log(import.meta.env)
      } catch (e) {
        console.log(e);
        alert('Error: 데이터를 불러올 수 없습니다.');
      } finally {
        setIsLoading(false);
      }
    }
    getContentDetails();
  }, [id, setData])

  if (isLoading) {
    return (<Spinner />);
  }

  console.log(data)

  return (
    <CommonModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
      { data ?
        <CommonContainer maxWidth="100%" flexDirection="row">
          <Left>
            <ImageContainer src={data?.presignedUrl}></ImageContainer>
          </Left>
          <Right>
            <CommonContainer flexDirection="column">
              <ProfileSection>
                <CommonAvatar username={data.author.nickname} imageURL={data.author.nickname} size="md" />
                <Divider
                  mt="0.8rem"
                  mb="0.8rem"
                  borderColor="gray.800"
                  width="60%"
                />
              </ProfileSection>
              <ContentSection>
                <StoryContentDetail content={data.content} />
              </ContentSection>
              <ReactSection>
                <IconLeft>
                  <IoIosHeartEmpty size="2rem" />
                </IconLeft>
                <Text>{data?.likes} Likes</Text>
                <IconRight>
                  <IoBookmarkOutline size="2rem" />
                </IconRight>
              </ReactSection>
            </CommonContainer>
          </Right>
        </CommonContainer>
        : <Spinner />}
    </CommonModal>
  );
};

const Left = styled.section`
  width: 50%;
  height: 60vh;
`;
const Right = styled.section`
  width: 50%;
  height: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const ImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: -3rem;
`;

const ProfileSection = styled.section`
  width: 100%;
  height: auto;
`;

const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ReactSection = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconLeft = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const IconRight = styled.button`
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

const Text = styled.text`
  font-size: 1rem;
  margin-left: 0.5rem;
`;
export default StoryDetailModal;
