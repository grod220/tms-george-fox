import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useRedirectHome = () => {
  const router = useRouter();

  useEffect(() => {
    void router.push('/');
  }, []);
};
