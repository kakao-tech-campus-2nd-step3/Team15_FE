import { useState } from 'react';
import { Input, InputGroup, InputRightElement, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

type SearchBoxProps = {
  setSearchQuery: (query: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = () => {
    if (inputValue) {
      setSearchQuery(inputValue);
    } else {
      console.log('검색어를 입력하세요.');
    }
  };

  return (
    <Flex align="center" justify="center" width="100%" height="200px">
      <InputGroup width="40%" >
        <Input
          type='text'
          placeholder='책 제목을 입력해주세요.'
          focusBorderColor="gray.400"
          width="100%" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyPress={handleSearch}
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
  );
};

export default SearchBox;
