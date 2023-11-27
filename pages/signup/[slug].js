import Head from 'next/head';
import SignupForm from '../../components/pages/SignupForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <SignupForm /> 
      
    </div>
  );
}

 