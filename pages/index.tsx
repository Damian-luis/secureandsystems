import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';
import { useAuth } from '../utils/auth';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    router.push('/home');
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div >
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
    </main>
  );
}
