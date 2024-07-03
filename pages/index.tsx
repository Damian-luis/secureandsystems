
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';
import { useAuth } from '../utils/auth';
import { useState } from 'react';
import styles from "../styles/index.module.css"
import { loginService } from "./api/login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }
    try{

      const isAuthenticated = await loginService(username, password);
    
    if (isAuthenticated) {
      login();
      localStorage.setItem('user', JSON.stringify({ username }));
      router.push('/home');
    } else {
      alert('Invalid username or password');
    }

    }
    catch(e){
      console.log(e)
    }
    
  };
  return (
    <div className={styles.main}>
    <div className={styles.logincontainer}>
      <div className={styles.login}>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingrese su usuario"
                className={styles.label}
              />
        
        <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                className={styles.label}
              />
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  </div>
  );
}
