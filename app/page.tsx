
import Head from 'next/head';
import { LoginLayout } from './components/users/login/layout/LoginLayout';
import { LoginFragment } from './components/users/login/layout/LoginFragment';
export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoginLayout>
        <LoginFragment />
      </LoginLayout>    
    </>
  );
}
