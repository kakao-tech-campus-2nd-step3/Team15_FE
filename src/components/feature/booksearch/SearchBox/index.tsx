import { useState } from 'react';
import instance from '@/api/instance';  // 앞서 만든 axios instance 불러오기
import { Input, InputGroup, InputRightElement, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa"


const SearchBox = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const fetchBookInfo =  async (title: string)  => {
    try {
      const response = await instance.get('/api/books/search', {
        params: { title }, 
      });
      console.log('책 정보:', response.data);
    } catch (error) {
      console.error('책 정보 가져오기 실패:', error);
    }
  };

  const handleSearch = () => {
    if (inputValue) {
      fetchBookInfo(inputValue); // inputValue를 title로 전달
    } else {
      console.log('검색어를 입력하세요.');
    }
  };
  
  return (
    <Flex align="center" justify="center" width="100%" height="200px">
        <InputGroup width="70%">
          <Input
            type='text'
            placeholder='책 제목을 입력해주세요.'
            focusBorderColor="gray.400"
            width="100%"  // 전체 너비 사용 (InputGroup 내에서 조절)
            onChange={(e) => setInputValue(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              aria-label="Search database"
              icon={<FaSearch />}
              variant="unstyled" 
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>

  </Flex>
  )

}



export default SearchBox;
