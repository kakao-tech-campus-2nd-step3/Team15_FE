import { useState, useEffect } from 'react';
import BookCard from '@/components/feature/booksearch/BookCard';
import CommonGrid from '@/components/common/Grid';
import SearchBox from '@/components/feature/booksearch/SearchBox';
import { Box, Text } from "@chakra-ui/react";
import instance from '@/api/instance';
import { useInView } from 'react-intersection-observer';

const Books: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true); 

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    setBooks([]);
    setPage(0);
    setHasMore(true);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery && hasMore) {
      const fetchBookInfo = async () => {
        try {
          const response = await instance.get(`/api/books/search`, {
            params: { 
              title: searchQuery,
              page: page,
            },
          });
          console.log(response.data);
          console.log(page);

          if (response.data.content.length > 0) {
            setBooks(prevBooks => [...prevBooks, ...response.data.content]);
          } else {
            setHasMore(false);
          }
        } catch (error) {
          console.error('책 정보 가져오기 실패:', error);
        }
      };

      fetchBookInfo();
    }
  }, [searchQuery, page]);

  useEffect(() => {
    console.log("inview", inView);
    console.log("hasMore", hasMore);

    if (inView && hasMore) {
      setPage(page => page + 1);
    }
  }, [inView, hasMore]);


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
              ref={index === books.length - 1 ? ref : null} 
            />
          ))}
        </CommonGrid>
      ) : (
        <Text textAlign="center" mt="4">
          책 제목을 입력해 검색해 주세요.
        </Text>
      )}
      {inView && !hasMore && (  // hasMore가 false일 때만 메시지를 표시
        <Text textAlign="center" mt="4">
          더 이상 검색 결과가 없습니다.
        </Text>
      )}
    </Box>
  );
};

export default Books;
