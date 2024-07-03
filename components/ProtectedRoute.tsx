// components/ProtectedRoute.tsx
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/auth';

const ProtectedRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      router.replace('/');
    }
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
