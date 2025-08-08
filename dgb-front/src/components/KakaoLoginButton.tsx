'use client';

import { KAKAO_AUTH_URL } from '@/constants/oauth';

const KakaoLoginButton = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <button onClick={handleLogin} className="px-4 py-2 bg-yellow-300 rounded">
      카카오 로그인
    </button>
  );
};

export default KakaoLoginButton;
