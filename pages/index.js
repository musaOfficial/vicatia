import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Homepage from '../components/pages/Homepage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
      
    </div>
  );
}
