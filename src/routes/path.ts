const REDIRECT_PATH = import.meta.env.VITE_KAKAO_REDIRECT_PATH;
export const RouterPath = {
    home: '/',  //메인 페이지
    story: '/story', // 스토리 피드 페이지 
    challenge: '/challenge',  // 챌린지 피드 페이지
    myPage: '/mypage/:useerId',  // 마이 페이지
    login: '/login',  // 로그인 페이지
    notFound: '/*',
    Oauth: REDIRECT_PATH, // 소셜로그인 리다이렉트 주소 
};

// 지금은 필요 X; 논의 후 구현

// export const getDynamicPath = {

// }