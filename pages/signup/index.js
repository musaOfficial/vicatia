import Head from 'next/head';
import Signup from '../../components/pages/Signup';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Signup /> 
      
    </div>
  );
}

 