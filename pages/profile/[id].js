import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Profile from '../../components/pages/Profile';
export default function PetsittersPage() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Profile />
    </div>
  );
}

 