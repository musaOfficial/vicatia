import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Login from '../components/pages/Login';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Login /> 
      
    </div>
  );
}

 