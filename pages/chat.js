import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ChatPage from '../components/pages/ChatPage';

export default function Chat() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <ChatPage /> 
      
    </div>
  );
}

 