// pages/home.tsx
import ProtectedRoute from '../components/ProtectedRoute';
//import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <ProtectedRoute>
      <div >
        <h1>Home</h1>
        <p>Welcome to the protected home page!</p>
      </div>
    </ProtectedRoute>
  );
};

export default Home;
