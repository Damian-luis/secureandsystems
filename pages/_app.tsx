// pages/_app.tsx
import type { AppProps } from 'next/app';
import { AuthProvider } from "../utils/auth"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

