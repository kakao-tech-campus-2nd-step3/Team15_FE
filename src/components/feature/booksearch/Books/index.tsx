import { useState, useEffect } from 'react';
import BookCard from '@/components/feature/booksearch/BookCard';
import CommonGrid from '@/components/common/Grid'
import SearchBox from '@/components/feature/booksearch/SearchBox';
import { Box, Text } from "@chakra-ui/react";
import instance from '@/api/instance';

const Books: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (searchQuery) {
      const fetchBookInfo = async () => {
        try {
          const response = await instance.get(`/api/books/search`, {
            params: { title: searchQuery },
          });
          setBooks(response.data.content); 
        } catch (error) {
          console.error('책 정보 가져오기 실패:', error);
        }
      };

      fetchBookInfo();
    }
  }, [searchQuery]);
  return (
    <Box>
      <SearchBox setSearchQuery={setSearchQuery} />
      {books.length > 0 ? (
        <CommonGrid columns={4} gap={20}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              image={book.cover}
              title={book.title}
              author={book.author}
              date={book.date}
            />
          ))}
        </CommonGrid>
      ) : (
        <Text textAlign="center" mt="4">
          책 제목을 입력해 검색해 주세요.
        </Text>
      )}
    </Box>
  );
};

export default Books;
