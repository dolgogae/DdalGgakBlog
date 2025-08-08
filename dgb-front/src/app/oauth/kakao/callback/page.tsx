'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (code) {
      axios
        .post('http://localhost:8080/oauth/kakao', { code })
        .then((res) => {
          setUser(res.data.user); // 유저 정보 저장
          router.push('/');
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [code]);

  return <div>카카오 로그인 처리 중...</div>;
}
