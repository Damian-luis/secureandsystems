// pages/home.tsx
import ProtectedRoute from '../components/ProtectedRoute';
//import styles from '../styles/Home.module.css';
import Header from "../components/Header"
import About from '../components/About';
import Interests from '../components/Interests';
import AddInterestCard from "../components/AddInterestCard"
import styles from "../pages/home.module.css"
import { userDataService } from './api/user';
import { useState,useEffect } from 'react';
import { UserInfo } from '@/interfaces/userInterface';
import { useAuth } from '@/utils/auth';
import { useRouter } from 'next/router';
import ModalForm from '@/components/ModalForm';
const Home = () => {
  const [userData, setUserData] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    } else {
      const getData = async () => {
        try {
          const data = await userDataService();
          setUserData(data);
          console.log(data)
        } catch (error:any) {
          setError(error);
        }
      };
      getData();
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  const addInterest = (newInterest: string) => {
    if (userData) {
      setUserData({
        ...userData,
        interests: [...userData.interests, newInterest],
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className={styles.main}>

      <div className={styles.mainUpSide}>
          <Header name={userData?.name} lastname={userData?.lastname}/>
          <About description={userData?.description}/>    
      </div>

      <div className={styles.mainDownSide}>
        <div className={styles.mainDownSideInterests}>
        <Interests interests={userData?.interests}/>
        <AddInterestCard addInterest={addInterest}/>
        </div>
      
      <ModalForm/>
      </div>
      
      </div>
    </ProtectedRoute>
  );
};

export default Home;
