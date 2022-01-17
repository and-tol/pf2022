import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Heading } from '../components';

const NotFoundPage = (): JSX.Element => {
  const router = useRouter();


  useEffect(() => {
    let timerId = setTimeout(() => {
      router.push('/');
    }, 3500);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="wrapper center">
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading tag="h1">404</Heading>
        <Heading tag="h2">Something is going wrong...</Heading>
      </div>
    </div>
  );
};

export default NotFoundPage;
