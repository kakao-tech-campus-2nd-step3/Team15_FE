import CommonContainer from "@/components/common/layouts/Container";
import CommonGrid from "@/components/common/Grid";
import CommonCard from "@/components/feature/home/Card";

const LandingItems = () => {
    return(
        <>
            <CommonContainer
            maxWidth={'90%'}
            alignItems={'center'}
            justifyContent={'center'}
            >
            {/* 추후 API 연동하여 map 함수 사용하여 처리할 예정. 지금은 모양만 잡아두었음. */}
            <CommonGrid columns={2} gap={50}>
            <CommonCard
                maxWidth={'lg'}
                imageURL={
                'https://blog.kakaocdn.net/dn/dRLhws/btsyMcArENG/7laJloEzfoMo1y7jvZ69a1/img.jpg'
                }
                title={'구의 증명'}
                profileImage={
                'https://avatars.githubusercontent.com/u/155360562?v=4'
                }
                username={'eunjin210'}
            />
            <CommonCard
                maxWidth={'lg'}
                imageURL={
                'https://mblogthumb-phinf.pstatic.net/MjAyMjA1MTlfMjQ4/MDAxNjUyOTY1MTgxMTcz.CzhUIMYY9uHr44RWOcaVUIRCbIF4KjZvb9eWv8HNJIkg.SH5HFpX7Qkd0Y8FQSO1e4q75xpRvM6_TnVfujK67dnkg.JPEG.tmddk778/Screenshot%EF%BC%BF20220519%EF%BC%8D215926%EF%BC%BFSamsung_Internet.jpg?type=w800'
                }
                title={'제주도에서 읽는 세계문학'}
                content={'카라마조프 가의 형제들을 읽고'}
                profileImage={
                'https://dnvefa72aowie.cloudfront.net/origin/article/202101/4C602D8B2D1FBA4137FD5B7BEBE5C97B8BE52CD881B0ACF7AEE363E6FFDF4D45.jpg?f=webp&q=95&s=1440x1440&t=inside'
                }
                username={'dlwlrma'}
            />
            <CommonCard
                maxWidth={'lg'}
                imageURL={
                'https://data.onnada.com/character/202210/3718766049_3f1397a1_hitori.jpg'
                }
                title={'봇치 더 록'}
                profileImage={
                'https://i.pinimg.com/236x/88/0b/82/880b82e626aaf152fa5e7ee7bd2c517b.jpg'
                }
                username={'可口可乐'}
            />
            <CommonCard
                maxWidth={'lg'}
                imageURL={
                'https://mblogthumb-phinf.pstatic.net/MjAyMzAyMDdfNjcg/MDAxNjc1Nzc1OTg1NDU1.8NtAL3RH6PpYnagPDx8RLbRci2o0YQJmQ2Rzp9wfU9sg.IlsyyDE0bKzL30m7FyTgf0aazXroTeE1mIdGvMO_gqcg.PNG.azzi_01/_4.png?type=w800'
                }
                title={'독서 챌린지 모집합니다.'}
                profileImage={
                'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MjJfMTEw/MDAxNjYxMTAzNDkyMzUz.nBLLdNFmw3WuPGw6xtHtnjxYO_Bkr90NDmEgpd1jjkIg.j35Gwg9l59iTdBe2xVlpm6ufCbBUQxkWHAwlWzlDPp8g.JPEG.bomya930/1660737637998.jpg?type=w800'
                }
                username={'반휘혈'}
            />
            </CommonGrid>
            </CommonContainer>
        </>
    )
}

export default LandingItems;

