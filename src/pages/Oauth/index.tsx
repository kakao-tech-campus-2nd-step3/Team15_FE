import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import axios from 'axios';

const OauthPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // const code = new URLSearchParams(location.search).get('code');
    // if (code) {
    //   axios.post('', { code })
    //     .then(response => { 
    //       localStorage.setItem('access_token', response.data.accessToken);
    //       localStorage.setItem('refresh_token', response.data.refreshToken);
    //       window.location.href = '/home';
    //     })
    //     .catch(error => {
    //       console.error('로그인 실패:', error);
    //     });
    // }
  }, [location]);
}

export default OauthPage;